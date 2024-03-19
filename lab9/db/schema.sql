-- Create Patients table
CREATE TABLE Patients (
    patient_id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    age INTEGER,
    condition TEXT
);

-- Create Doctors table
CREATE TABLE Doctors (
    doctor_id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    specialty VARCHAR(255)
);

-- Create Appointments table
CREATE TABLE Appointments (
    appointment_id SERIAL PRIMARY KEY,
    patient_id INTEGER REFERENCES Patients(patient_id),
    doctor_id INTEGER REFERENCES Doctors(doctor_id),
    appointment_time TIMESTAMP,
    notes TEXT
);
