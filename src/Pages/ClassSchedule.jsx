
import React, { useState } from 'react';
import { Info, UserCircle2, BookOpen, MapPin } from 'lucide-react';

const facultyData = {
  'KZ': {
    name: 'Md. Khayruzzaman',
    subject: 'Discrete Mathematics',
    image: '/api/placeholder/200/200',
    classroom: 'Software Lab, Room 455',
    syllabus: 'Introduction to discrete structures, logic, set theory, and combinatorics.'
  },
  'MA': {
    name: 'Md. Ashadul Iftakher',
    subject: 'Statistics',
    image: '/api/placeholder/200/200',
    classroom: 'Room 353',
    syllabus: 'Probability, statistical inference, hypothesis testing, and data analysis.'
  },
  'AH': {
    name: 'Md. Abdul Hadi',
    subject: 'Digital Systems',
    image: '/api/placeholder/200/200',
    classroom: 'Hardware Lab, Room : 453',
    syllabus: 'Digital logic, circuit design, micro controllers, and embedded systems.'
  },
  'SK': {
    name: 'Mr. Saifuzzaman Khan',
    subject: 'Linear Algebra',
    image: '/api/placeholder/200/200',
    classroom: 'Room 353',
    syllabus: 'Vector spaces, linear transformations, matrices, and eigenvalues.'
  },
  'RI': {
    name: 'Md.Rajibul Islam ',
    subject: 'History',
    image: '/api/placeholder/200/200',
    classroom: 'Room 353',
    syllabus: 'Modern history, socio-political movements, and cultural developments.'
  }
};

const ClassSchedule = () => {
  const [selectedClass, setSelectedClass] = useState(null);

  const scheduleData = [
    [null, 'Discrete Math.(KZ)', 'Statistics (MA)', 'Digital System (AH)', null],
    [null, 'Linear Algebra (SK)', 'History (RI)', 'Digital System (AH)', 'Discrete Math.(KZ)'],
    [null, 'Digital System (AH)', 'Linear Algebra (SK)', 'Statistics (MA)', 'History (RI)'],
    [null, 'History (RI)', 'Linear Algebra (SK)', 'Digital System Lab. (AH)', null],
    [null, 'Discrete Math.(KZ)', 'Statistics (MA)', 'Digital System Lab. (AH)', null]
  ];

  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'];
  const timeslots = ['8:45 - 9:30', '9:30 - 10:15', '10:35 - 11:20', '11:20 - 12:05', '12:05 - 12:50'];

  const renderSchedule = () => {
    return scheduleData.map((daySchedule, dayIndex) => (
      daySchedule.map((classInfo, timeIndex) => (
        classInfo ? (
          <div 
            key={`${days[dayIndex]}-${timeIndex}`}
            onClick={() => setSelectedClass({
              day: days[dayIndex],
              time: timeslots[timeIndex],
              ...facultyData[classInfo.split('(')[1].replace(')', '')]
            })}
            className="btn btn-ghost w-full h-full min-h-[40px] md:min-h-[50px] lg:min-h-[70px] flex items-center justify-center text-center 
                       hover:bg-pink-300 cursor-pointer 
                       transform transition-all duration-300 
                       hover:scale-105 hover:shadow-lg 
                       text-[10px] md:text-xs lg:text-base font-bold p-0.5 md:p-1
                       bg-white/30 backdrop-blur-sm"
          >
            {classInfo}
          </div>
        ) : (
          <div key={`${days[dayIndex]}-${timeIndex}`} className="min-h-[40px] md:min-h-[50px] lg:min-h-[80px] bg-white/50"></div>
        )
      ))
    ));
  };

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
        <h1 className="text-lg md:text-xl lg:text-3xl font-bold text-center underline mb-2 md:mb-4 lg:mb-6">Weekly Class Schedule : Sec(A)</h1>
        
        <div className="overflow-x-auto">
          <div className="grid grid-cols-6 gap-0.5 md:gap-1 lg:gap-2 text-center min-w-[300px] md:min-w-[600px] lg:min-w-[800px]">
            <div className="font-bold rounded-xl bg-base-300 text-[10px] md:text-xs lg:text-base py-1 md:py-2">Time/Day</div>
            {timeslots.map((time, index) => (
              <div key={index} className="font-bold rounded-xl bg-base-300 text-[10px] md:text-xs lg:text-base py-1 md:py-2">
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
            <div className="modal-box w-[95vw] md:w-[80vw] lg:max-w-xl">
              <form method="dialog">
                <button 
                  className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" 
                  onClick={() => setSelectedClass(null)}
                >✕</button>
              </form>
              <div className="flex flex-col items-center">
                <img 
                  src={selectedClass.image} 
                  alt={selectedClass.name} 
                  className="w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 rounded-full object-cover mb-4"
                />
                <h2 className="text-base md:text-lg lg:text-2xl font-bold text-center">{selectedClass.name}</h2>
                <div className="mt-4 space-y-2 w-full text-xs md:text-sm lg:text-base">
                  <div className="flex items-center">
                    <UserCircle2 className="mr-2 w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5" />
                    <span>{selectedClass.subject}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="mr-2 w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5" />
                    <span>{selectedClass.classroom}</span>
                  </div>
                  <div className="flex items-center">
                    <BookOpen className="mr-2 w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5" />
                    <p>{selectedClass.syllabus}</p>
                  </div>
                  <div className="flex items-center">
                    <Info className="mr-2 w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5" />
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