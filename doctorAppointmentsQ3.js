// Description: WAP in JavaScript to print the Appointment Schedule for the Day. Consider a data saved in format of array of objects - 

// id, doctorName, array [visitoName, f]

// Write a program to display the Appointment Schedule for the Day for a particular Doctor.

var appointments = [
    {
        id: 1,
        doctorName: "Patil",
        appointment: [
            {
            visitoName:"Raman", f:"2023-03-14"
        },
        {
            visitoName:"Hema", f:"2023-02-15"
        },
        {
            visitoName:"Kushal", f:"2023-02-16"
        }

    ]
    },
    {
        id: 2,
        doctorName: "Kirti",
        appointment: [
            {
            visitorName:"Kushal", dateOfApponitment:"2023-02-14"
        },
        {
            visitorName:"ravi", dateOfApponitment:"2023-02-14"
        },
        {
            visitorName:"sonam", dateOfApponitment:"2023-02-16"
        }
    ]
    },
]


function apoSchedule(id) {

    const doctor = appointments.find(function(appointment) {
        return appointment.id === id;
      });
    
      if (doctor) {
        console.log(`Appointment Schedule for ${doctor.doctorName}:`);
        doctor.appointment.map(function(appointment) {
          console.log(`${appointment.dateOfApponitment} - ${appointment.visitorName}`);
        });
      } else {
        console.log("Doctor not found!");
      }
    }
    
    // Calling the function to display appointment schedule for a particular doctor (example: Doctor ID 1)
    apoSchedule(2);