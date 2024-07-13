# Information Management Application

This project appears to be a React application for managing student information in a JSD7 CAMP.

## Home Component

<img width="1006" alt="Home Component" src="https://github.com/user-attachments/assets/5d355e83-dbb8-4c2c-99d8-225cfaba1b4b">

- Manages the main state and logic of the application.
- Uses React hooks (`useState`) to manage state for `detail` and `tableArray`.
- Implements functions to switch between user and admin views.
- Renders different components based on the current view (home or admin).
- Passes data and functions as props to child components.

## Table Component

<img width="1006" alt="Table Component" src="https://github.com/user-attachments/assets/b73499dc-4902-414b-a672-e6d64b2da8c6">

- Receives props from the Home component to display and manage student data.
- Likely renders a table with student information.

## CreateUser Component

<img width="1006" alt="CreateUser Component" src="https://github.com/user-attachments/assets/b301bc0c-e146-4da0-a643-fdc55445d3bf">

- Used in the admin view to add new students to the list.
- Sends new user data back to the Home component via the `handleUserData` function.

## Owner Component

<img width="1006" alt="Owner Component" src="https://github.com/user-attachments/assets/15ef7cb7-673b-4aa5-b07f-12fb54f44456">

- Displays information about the project owner (Namfah).
- Includes an image and a brief introduction.

## React Router DOM

Mentioned in the description, but not shown in the provided code. Likely used for navigation between different views or pages in the application.
