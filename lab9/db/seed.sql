-- Patients table
INSERT INTO Patients (patient_id, name, age, condition) VALUES
(1,'John Doe', 30, 'Flu'),
(2,'Jane Smith', 25, 'Sprained Ankle'),
(3,'Mike Brown', 40, 'Diabetes');

-- Doctors table
INSERT INTO Doctors (doctor_id, name, specialty) VALUES
(1,'Dr. Alice Jones', 'Cardiology'),
(2,'Dr. Bob Kelly', 'Orthopedics'),
(3,'Dr. Charles Lee', 'Pediatrics');

-- Appointments table
INSERT INTO Appointments (appointment_id, patient_id, doctor_id, appointment_time, notes) VALUES
(1, 1, 1, '2024-03-17 10:00:00', 'Regular check-up'),
(2, 2, 2, '2024-03-18 11:00:00', 'Follow-up after surgery'),
(3, 3, 3, '2024-03-19 09:30:00', 'Pediatric annual check');
