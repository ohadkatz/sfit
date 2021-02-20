type MovementClass = 'Squat' | 'Bench' | 'Deadlift'

type MovementDescriptor = {
  name: string
  isChecked: boolean
}

export const MovementDict: Record<MovementClass, MovementDescriptor[]> = {
  Squat: [
    { name: 'Back Squat', isChecked: false },
    { name: 'Front Squat', isChecked: false },
    { name: 'Zercher Squat', isChecked: false },
    { name: 'KettleBell Squat', isChecked: false },
  ],
  Bench: [
    { name: 'Flat Bench', isChecked: false },
    { name: 'KettleBell Floor Press', isChecked: false },
    { name: 'Dumbbell Floor Press', isChecked: false },
    { name: 'Dumbbell Bench', isChecked: false },
    { name: 'Overhead Bench', isChecked: false },
  ],
  Deadlift: [
    { name: 'Deadlift', isChecked: false },
    { name: 'Snatch Pull', isChecked: false },
    { name: 'Snatch Grip', isChecked: false },
    { name: 'Clean Pull', isChecked: false },
    { name: 'Clean Grip', isChecked: false },
  ],
}
