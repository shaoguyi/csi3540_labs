import pandas as pd
from sklearn.preprocessing import MinMaxScaler
import calendar

# 加载数据
def load_data(file_path):
    return pd.read_csv(file_path)

# 处理异常值
def handle_outliers(df, column):
    Q1 = df[column].quantile(0.25)
    Q3 = df[column].quantile(0.75)
    IQR = Q3 - Q1
    lower_bound = Q1 - 1.5 * IQR
    upper_bound = Q3 + 1.5 * IQR
    df = df[(df[column] >= lower_bound) & (df[column] <= upper_bound)]
    return df

# 标准化文本数据，转换为小写并去除首尾空格
def standardize_text_data(df, column):
    df[column] = df[column].str.lower().str.strip()
    return df

# 处理缺失值，采用填充策略，对数值列使用均值或中位数填充，对分类列使用众数或常数填充
def handle_missing_values(df, numeric_strategy='mean', category_strategy='mode'):
    numeric_cols = df.select_dtypes(include=['number']).columns
    for col in numeric_cols:
        if numeric_strategy == 'mean':
            df[col] = df[col].fillna(df[col].mean())
        elif numeric_strategy == 'median':
            df[col] = df[col].fillna(df[col].median())
    
    category_cols = df.select_dtypes(include=['object']).columns
    for col in category_cols:
        if category_strategy == 'mode':
            df[col] = df[col].fillna(df[col].mode()[0])
        elif category_strategy == 'constant':
            df[col] = df[col].fillna('Unknown')
    return df

# 数据标准化
# 对数值特征进行最小-最大缩放，确保数值范围的一致性
def scale_numeric_features(df, columns):
    scaler = MinMaxScaler()
    df[columns] = scaler.fit_transform(df[columns])
    df[columns] = df[columns].round(3)
    return df

# 特征工程
# 生成新的特征，包括日期相关特征和计算新的总销售额特征
def feature_engineering(df):
    df['Date'] = pd.to_datetime(df['Date'])
    df['Month'] = df['Date'].dt.month.apply(lambda x: calendar.month_name[x])
    df['DayOfWeek'] = df['Date'].dt.day_name()
    df['Total'] = (df['Unit price'] * df['Quantity']).round(3)
    return df

# 数据转换和特征工程
# 将数据转换为适合分析和建模的格式，同时进行数据清洗、标准化和特征提取等处理
def transform_data(df):
    df = df.drop_duplicates()
    df = handle_missing_values(df)
    
    numeric_cols = df.select_dtypes(include=['number']).columns
    for col in numeric_cols:
        df = handle_outliers(df, col)

    text_cols = df.select_dtypes(include=['object']).columns
    for col in text_cols:
        df = standardize_text_data(df, col)

    df = feature_engineering(df)
    df = scale_numeric_features(df, numeric_cols)
    
    return df

# 保存转换后的数据
def save_transformed_data(df, file_path):
    df.to_csv(file_path, index=False)
    print(f"Data saved to {file_path}")

# 分析销售数据并保存结果
def analyze_and_save_results(df, output_path):
    with open(output_path, 'w') as f:
        # 分析会员与非会员的消费行为差异
        member_sales = df[df['Customer type'] == 'member']['Total'].mean()
        nonmember_sales = df[df['Customer type'] == 'normal']['Total'].mean()
        f.write(f"Average sales for members: {member_sales:.2f}\n")
        f.write(f"Average sales for non-members: {nonmember_sales:.2f}\n\n")

        # 性别差异对购买决策的影响
        male_sales = df[df['Gender'] == 'male']['Total'].mean()
        female_sales = df[df['Gender'] == 'female']['Total'].mean()
        f.write(f"Average sales for male customers: {male_sales:.2f}\n")
        f.write(f"Average sales for female customers: {female_sales:.2f}\n\n")

        # 购买时机对销售结果的影响
        days_order = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
        df['DayOfWeek'] = pd.Categorical(df['DayOfWeek'], categories=days_order, ordered=True)
        sales_by_day = df.groupby('DayOfWeek', observed=False)['Total'].sum().reindex(days_order)
        f.write("Sales by day of week:\n")
        for day, total_sales in sales_by_day.items():
            f.write(f"{day}: {total_sales:.2f}\n")

if __name__ == "__main__":
    input_file_path = "input.csv"
    output_file_path = "output.csv"
    analysis_output_path = "analysis.csv"
    
    df = load_data(input_file_path)
    transformed_df = transform_data(df)
    save_transformed_data(transformed_df, output_file_path)