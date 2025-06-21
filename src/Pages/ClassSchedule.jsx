
// import React, { useState } from 'react';
// import { Info, UserCircle2, BookOpen, MapPin } from 'lucide-react';

// const facultyData = {
//   'MT': {
//     name: 'Mirza Tahera',
//     subject: 'Ordinary Differential Equation',
//     image: '/api/placeholder/200/200',
//     classroom: 'Software Lab, Room 455',
//     syllabus: 'Introduction to Differential Equation'
//   },
//   'MAC': {
//     name: 'MAC',
//     subject: 'Fundamental of Business Studies',
//     image: '/api/placeholder/200/200',
//     classroom: 'Room 353',
//     syllabus: 'Fundamental of Business Studies'
//   },
//   'SR': {
//     name: 'SR',
//     subject: 'Computer Architecture',
//     image: '/api/placeholder/200/200',
//     classroom: 'Hardware Lab, Room 453',
//     syllabus: 'Computer Architecture'
//   },
//   'MMR': {
//     name: 'Md. Moklesur Rahman',
//     subject: 'Object Orientated Programming',
//     image: '/api/placeholder/200/200',
//     classroom: 'Room 353',
//     syllabus: 'Object Orientated Programming'
//   },
//   'KZ': {
//     name: 'Md. Khayruzzaman',
//     subject: 'Data Structure',
//     image: '/api/placeholder/200/200',
//     classroom: 'Room 353',
//     syllabus: 'Data Structure'
//   }
// };

// const ClassSchedule = () => {
//   const [selectedClass, setSelectedClass] = useState(null);

//   const scheduleData = [
//     // Sunday
//     [null, 'Ordinary Differential Equation (MT)', 'Fundamental of Business Studies (MAC)', 'Computer Architecture (SR)', null],
//     // Monday
//     ['Data Structure (KZ)', 'Object Orientated Programming (MMR)', 'Computer Architecture (SR)', 'Object Orientated Programming Lab (MMR)', 'Data Structure Lab (KZ)'],
//     // Tuesday
//     ['Computer Architecture (SR)', 'Fundamental of Business Studies (MAC)', 'Ordinary Differential Equation (MT)', 'Object Orientated Programming Lab (MMR)', null],
//     // Wednesday
//     ['Data Structure (KZ)', 'Data Structure Lab (KZ)', 'Fundamental of Business Studies (MAC)', 'Object Orientated Programming (MMR)', null],
//     // Thursday
//     ['Ordinary Differential Equation (MT)', 'Object Orientated Programming (MMR)', 'Data Structure (KZ)', null, null]
//   ];

//   const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'];
//   const timeslots = ['9:30 - 10:15', '10:35 - 11:20', '11:20 - 12:05', '12:05 - 12:50', '1:35 - 2:20'];

//   const renderSchedule = () => {
//     return scheduleData.map((daySchedule, dayIndex) => (
//       daySchedule.map((classInfo, timeIndex) => (
//         classInfo ? (
//           <div
//             key={`${days[dayIndex]}-${timeIndex}`}
//             onClick={() => {
//               const facultyInitial = classInfo.match(/\(([^)]+)\)/)?.[1];
//               if (!facultyInitial || !facultyData[facultyInitial]) return;
//               setSelectedClass({
//                 day: days[dayIndex],
//                 time: timeslots[timeIndex],
//                 ...facultyData[facultyInitial]
//               });
//             }}
//             className="btn btn-ghost w-full h-full min-h-[40px] md:min-h-[50px] lg:min-h-[70px] flex items-center justify-center text-center 
//                        hover:bg-pink-300 cursor-pointer 
//                        transform transition-all duration-300 
//                        hover:scale-105 hover:shadow-lg 
//                        text-[10px] md:text-xs lg:text-base font-bold p-0.5 md:p-1
//                        bg-white/30 backdrop-blur-sm text-black"
//           >
//             {classInfo}
//           </div>
//         ) : (
//           <div key={`${days[dayIndex]}-${timeIndex}`} className="min-h-[40px] md:min-h-[50px] lg:min-h-[80px] bg-white/50"></div>
//         )
//       ))
//     ));
//   };

//   return (
//     <div 
//       className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center p-1 md:p-2 lg:p-4"
//       style={{
//         backgroundImage: "url('https://i.ibb.co.com/2M9P93y/Professional-Gaming-1536x861.png')",
//         backgroundColor: '#ffffff',
//         color: '#000000'
//       }}
//     >
//       <div className="container mx-auto bg-white/70 backdrop-blur-md rounded-xl p-2 md:p-4 lg:p-6 shadow-2xl">
//         <h1 className="text-lg md:text-xl lg:text-3xl font-bold text-center underline mb-2 md:mb-4 lg:mb-6 text-black">
//           Weekly Class Schedule : Sec(A)
//         </h1>
        
//         <div className="overflow-x-auto">
//           <div className="grid grid-cols-6 gap-0.5 md:gap-1 lg:gap-2 text-center min-w-[300px] md:min-w-[600px] lg:min-w-[800px]">
//             <div className="font-bold rounded-xl bg-gray-200 text-black text-[10px] md:text-xs lg:text-base py-1 md:py-2">
//               Time/Day
//             </div>
//             {timeslots.map((time, index) => (
//               <div key={index} className="font-bold rounded-xl bg-gray-200 text-black text-[10px] md:text-xs lg:text-base py-1 md:py-2">
//                 {time}
//               </div>
//             ))}

//             {days.map((day, index) => (
//               <React.Fragment key={day}>
//                 <div className="font-bold bg-gray-300 rounded-xl text-black py-1 md:py-2 text-[10px] md:text-xs lg:text-base">
//                   <span className="hidden md:inline">{day}</span>
//                   <span className="md:hidden">{day.substring(0, 3)}</span>
//                 </div>
//                 {renderSchedule()[index]}
//               </React.Fragment>
//             ))}
//           </div>
//         </div>

//         {selectedClass && (
//           <dialog open className="modal modal-open">
//             <div className="modal-box w-[95vw] md:w-[80vw] lg:max-w-xl bg-white">
//               <form method="dialog">
//                 <button 
//                   className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-black" 
//                   onClick={() => setSelectedClass(null)}
//                 >✕</button>
//               </form>
//               <div className="flex flex-col items-center">
//                 <img 
//                   src={selectedClass.image} 
//                   alt={selectedClass.name} 
//                   className="w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 rounded-full object-cover mb-4"
//                 />
//                 <h2 className="text-base md:text-lg lg:text-2xl font-bold text-center text-black">{selectedClass.name}</h2>
//                 <div className="mt-4 space-y-2 w-full text-xs md:text-sm lg:text-base text-black">
//                   <div className="flex items-center">
//                     <UserCircle2 className="mr-2 w-4 h-4" />
//                     <span>{selectedClass.subject}</span>
//                   </div>
//                   <div className="flex items-center">
//                     <MapPin className="mr-2 w-4 h-4" />
//                     <span>{selectedClass.classroom}</span>
//                   </div>
//                   <div className="flex items-center">
//                     <BookOpen className="mr-2 w-4 h-4" />
//                     <p>{selectedClass.syllabus}</p>
//                   </div>
//                   <div className="flex items-center">
//                     <Info className="mr-2 w-4 h-4" />
//                     <span>{selectedClass.day} | {selectedClass.time}</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </dialog>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ClassSchedule;


import React, { useState } from 'react';
import { Info, UserCircle2, BookOpen, MapPin } from 'lucide-react';

const facultyData = {
  'MT': {
    name: 'Mirza Tahera',
    subject: 'Ordinary Differential Equation',
    image: '/api/placeholder/200/200',
    classroom: 'Software Lab, Room 455',
    syllabus: 'Introduction to Differential Equation'
  },
  'MAC': {
    name: 'MAC',
    subject: 'Fundamental of Business Studies',
    image: '/api/placeholder/200/200',
    classroom: 'Room 353',
    syllabus: 'Fundamental of Business Studies'
  },
  'SR': {
    name: 'SR',
    subject: 'Computer Architecture',
    image: '/api/placeholder/200/200',
    classroom: 'Hardware Lab, Room 453',
    syllabus: 'Computer Architecture'
  },
  'MMR': {
    name: 'Md. Moklesur Rahman',
    subject: 'Object Orientated Programming',
    image: '/api/placeholder/200/200',
    classroom: 'Room 353',
    syllabus: 'Object Orientated Programming'
  },
  'KZ': {
    name: 'Md. Khayruzzaman',
    subject: 'Data Structure',
    image: '/api/placeholder/200/200',
    classroom: 'Room 353',
    syllabus: 'Data Structure'
  }
};

const ClassSchedule = () => {
  const [selectedClass, setSelectedClass] = useState(null);

  const timeslots = ['9:30 - 10:15', 'Break Time', '10:35 - 11:20', '11:20 - 12:05', '12:05 - 12:50', '1:35 - 2:20'];

  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'];

  const scheduleData = [
    // Sunday
    [null, 'Ordinary Differential Equation (MT)' , 'Fundamental of Business Studies (MAC)', 'Computer Architecture (SR)', null],
    // Monday
    ['Data Structure (KZ)', 'Object Orientated Programming (MMR)', 'Computer Architecture (SR)', 'Object Orientated Programming Lab (MMR)', 'Data Structure Lab (KZ)' ],
    // Tuesday
    ['Computer Architecture (SR)','Fundamental of Business Studies (MAC)', 'Ordinary Differential Equation (MT)', 'Object Orientated Programming Lab (MMR)', null],
    // Wednesday
    ['Data Structure (KZ)','Data Structure Lab (KZ)', 'Fundamental of Business Studies (MAC)', 'Object Orientated Programming (MMR)', null],
    // Thursday
    ['Ordinary Differential Equation (MT)','Object Orientated Programming (MMR)', 'Data Structure (KZ)', null, null]
  ];

  const renderSchedule = () =>
    scheduleData.map((daySchedule, dayIndex) =>
      timeslots.map((_, timeIndex) => {
        // Insert static "Break" cell
        if (timeIndex === 1) {
          return (
            <div
              key={`${days[dayIndex]}-break`}
              className="min-h-[40px] md:min-h-[50px] lg:min-h-[70px] bg-gray-200 text-black flex items-center justify-center text-xs font-semibold"
            >
              Break
            </div>
          );
        }

        // Adjust index due to break column
        const adjustedIndex = timeIndex > 1 ? timeIndex - 1 : timeIndex;
        const classInfo = daySchedule[adjustedIndex];

        if (!classInfo) {
          return (
            <div
              key={`${days[dayIndex]}-${timeIndex}`}
              className="min-h-[40px] md:min-h-[50px] lg:min-h-[80px] bg-white/50"
            ></div>
          );
        }

        return (
          <div
            key={`${days[dayIndex]}-${timeIndex}`}
            onClick={() => {
              const facultyInitial = classInfo.match(/\(([^)]+)\)/)?.[1];
              if (!facultyInitial || !facultyData[facultyInitial]) return;
              setSelectedClass({
                day: days[dayIndex],
                time: timeslots[timeIndex],
                ...facultyData[facultyInitial]
              });
            }}
            className="btn btn-ghost w-full h-full min-h-[40px] md:min-h-[50px] lg:min-h-[70px] flex items-center justify-center text-center 
                       hover:bg-pink-300 cursor-pointer 
                       transform transition-all duration-300 
                       hover:scale-105 hover:shadow-lg 
                       text-[10px] md:text-xs lg:text-base font-bold p-0.5 md:p-1
                       bg-white/30 backdrop-blur-sm text-black"
          >
            {classInfo}
          </div>
        );
      })
    );

  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center p-1 md:p-2 lg:p-4"
      style={{
        backgroundImage: "url('https://i.ibb.co.com/2M9P93y/Professional-Gaming-1536x861.png')",
        backgroundColor: '#ffffff',
        color: '#000000'
      }}
    >
      <div className="container mx-auto bg-white/70 backdrop-blur-md rounded-xl p-2 md:p-4 lg:p-6 shadow-2xl">
        <h1 className="text-lg md:text-xl lg:text-3xl font-bold text-center underline mb-2 md:mb-4 lg:mb-6 text-black">
          Weekly Class Schedule : Sec(A)
        </h1>
        
        <div className="overflow-x-auto">
          <div className="grid grid-cols-7 gap-0.5 md:gap-1 lg:gap-2 text-center min-w-[300px] md:min-w-[700px] lg:min-w-[950px]">
            <div className="font-bold rounded-xl bg-gray-200 text-black text-[10px] md:text-xs lg:text-base py-1 md:py-2">
              Time/Day
            </div>
            {timeslots.map((time, index) => (
              <div key={index} className="font-bold rounded-xl bg-gray-200 text-black text-[10px] md:text-xs lg:text-base py-1 md:py-2">
                {time}
              </div>
            ))}

            {days.map((day, index) => (
              <React.Fragment key={day}>
                <div className="font-bold bg-gray-300 rounded-xl text-black py-1 md:py-2 text-[10px] md:text-xs lg:text-base">
                  <span className="hidden md:inline">{day}</span>
                  <span className="md:hidden">{day.substring(0, 3)}</span>
                </div>
                {renderSchedule()[index]}
              </React.Fragment>
            ))}
          </div>
        </div>

        {selectedClass && (
          <dialog open className="modal modal-open">
            <div className="modal-box w-[95vw] md:w-[80vw] lg:max-w-xl bg-white">
              <form method="dialog">
                <button 
                  className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-black" 
                  onClick={() => setSelectedClass(null)}
                >✕</button>
              </form>
              <div className="flex flex-col items-center">
                <img 
                  src={selectedClass.image} 
                  alt={selectedClass.name} 
                  className="w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 rounded-full object-cover mb-4"
                />
                <h2 className="text-base md:text-lg lg:text-2xl font-bold text-center text-black">{selectedClass.name}</h2>
                <div className="mt-4 space-y-2 w-full text-xs md:text-sm lg:text-base text-black">
                  <div className="flex items-center">
                    <UserCircle2 className="mr-2 w-4 h-4" />
                    <span>{selectedClass.subject}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="mr-2 w-4 h-4" />
                    <span>{selectedClass.classroom}</span>
                  </div>
                  <div className="flex items-center">
                    <BookOpen className="mr-2 w-4 h-4" />
                    <p>{selectedClass.syllabus}</p>
                  </div>
                  <div className="flex items-center">
                    <Info className="mr-2 w-4 h-4" />
                    <span>{selectedClass.day} | {selectedClass.time}</span>
                  </div>
                </div>
              </div>
            </div>
          </dialog>
        )}
      </div>
    </div>
  );
};

export default ClassSchedule;
