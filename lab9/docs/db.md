# Database Design Documentation

## Entity Types and Their Attributes

### Patients

Patients is one of the core entities of our database, used to store information about individuals receiving treatment.

- **patient_id**: `SERIAL` - Primary key, unique identifier of the patient.
- **name**: `VARCHAR(255)` - The full name of the patient.
- **age**: `INTEGER` - The patient's age.
- **condition**: `TEXT` - The current health condition of the patient.

### Doctors

The Doctors entity holds basic information about the medical service providers.

- **doctor_id**: `SERIAL` - Primary key, unique identifier of the doctor.
- **name**: `VARCHAR(255)` - The full name of the doctor.
- **specialty**: `VARCHAR(255)` - The medical specialty or field of the doctor.

### Appointments

The Appointments entity records the details of an appointment between a patient and a doctor.

- **appointment_id**: `SERIAL` - Primary key, unique identifier of the appointment.
- **patient_id**: `INTEGER` - Foreign key referencing the patient's ID.
- **doctor_id**: `INTEGER` - Foreign key referencing the doctor's ID.
- **appointment_time**: `TIMESTAMP` - The date and time of the appointment.
- **notes**: `TEXT` - Additional notes or details about the appointment.


![Entity Relationship Diagram](/docs/ERD.png)
