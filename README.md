## Getting Started

To run the application locally, follow these steps:

1. Clone this repository to your local machine.
2. Navigate to the project directory in your terminal.
3. Run `npm install` to install the project dependencies.
4. Run `npm start` to start the development server.
5. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

Alternatively, you can access the deployed version of the application by clicking [here](link-to-deployment).

## Pages

### 1. Course Listing Page

#### Description:
The Course Listing Page displays a list of available courses.

#### Route:
`/`

#### Working:
- Fetches a list of courses from the backend.
- Displays each course as a card with its name, instructor, and thumbnail image.
- Clicking on a course card navigates the user to the Course Details Page.

### 2. Course Details Page

#### Description:
The Course Details Page provides detailed information about a selected course.

#### Route:
`/courses/:id`

#### Working:
- Fetches the details of the selected course based on its ID.
- Displays the course information, including description, instructor, schedule, and syllabus.

### 3. Student Dashboard

#### Description:
The Student Dashboard allows students to view their enrolled courses.

#### Route:
`/student`

#### Working:
- Fetches the enrolled courses for the logged-in student.
- Displays the list of enrolled courses with details such as course name, instructor, due date, and progress bar.
- Students can mark courses as completed from the dashboard.

### 4. All Students Dashboard

#### Description:
The All Students Dashboard displays a combined view of all students and their respective courses.

#### Route:
`/dashboard`

#### Working:
- Fetches the data of all students and their enrolled courses.
- Displays a list of all students along with their enrolled courses.

## Bonus Features

- **Real time**: Implemented real time connection with firebase.
- **Combined Student Dashboard**: A combined dashboard showing the enrolled courses for all students.

## Demo Video

You can watch the demo video of the website by clicking [here](https://drive.google.com/file/d/1tbnrOL7SVDfRGkaYWv8QPhNJJlQ2Ln-U/view?usp=sharing).
