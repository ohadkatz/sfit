interface MovementDescriptor {
  [name: string]: string
}

type MovementClass = 'Squat' | 'Bench' | 'Deadlift'

export const MovementDict: Record<MovementClass, MovementDescriptor[]> = {
  Squat: [
    { name: 'Back Squat' },
    { name: 'Front Squat' },
    { name: 'Zercher Squat' },
    { name: 'KettleBell Squat' },
  ],
  Bench: [
    { name: 'Flat Bench' },
    { name: 'KettleBell Floor Press' },
    { name: 'Dumbbell Floor Press' },
    { name: 'Dumbbell Bench' },
    { name: 'Overhead Bench' },
  ],
  Deadlift: [
    { name: 'Deadlift' },
    { name: 'Snatch Pull' },
    { name: 'Snatch Grip' },
    { name: 'Clean Pull' },
    { name: 'Clean Grip' },
  ],
}
