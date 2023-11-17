
# Profile Screen
A profile screen created using ReactJS for the task of Terribly Tiny Tales.

### Weblink: [Live Website](https://benju2205-ttt.onrender.com)
## Some Images:
<div style="display: flex;">
<img width="450px;" src="https://github.com/Benju2205/terribly_tiny_tales/assets/120126423/08f134c6-0424-4200-939e-5d8c4fe80d39" style="width: 300px; height: 450px; object-fit: cover; margin-right: 10px;"/>
<img width="450px;" src="https://github.com/Benju2205/terribly_tiny_tales/assets/120126423/2a2a55db-d8f6-498d-8c78-4f657f700864" style="width: 450px; height: 450px; object-fit: cover; margin-right: 10px;"/>
<img width="450px;" src="https://github.com/Benju2205/terribly_tiny_tales/assets/120126423/058a8cce-b216-488c-9c48-b43c360a0f52" style="width: 450px; height: 300px; object-fit: cover; margin-right: 10px;"/>
<img width="450px;" src="https://github.com/Benju2205/terribly_tiny_tales/assets/120126423/38bfe1d5-2741-40d8-ad2a-97396de46141" style="width: 450px; height: 300px; object-fit: cover; margin-right: 10px;"/>
</div>


## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Technologies/Libraries Used](#technologies-used)
- [Components](#components)
- [Plugins/dependencies](#usage)
- [Installation](#installation)
- [Feedback and Contributions](#contributions)

## Introduction
This app is created for the task given by Terribly Tiny Tales for the recruitment process for the role of Frontend Developer intern.

## Features
- **Responsive Design**: The profile screen adapts seamlessly to various screen sizes, ensuring a consistent and user-friendly experience across devices.
- **Profile Information Display**: Displays user profile details such as name, bio, profile picture, etc., in an organized and visually appealing layout
- **Tailwind CSS Integration**: Utilizes Tailwind CSS for efficient and customizable styling, leveraging utility classes for rapid UI development.
- **Material Design Components**: Integrates Material-Tailwind, providing Material Design components that enhance the visual appeal and usability of the profile screen.

## Technologies/Libraries Used
- **React.js**: A JavaScript library for building user interfaces.
- **HTML5 & CSS3**: Markup and styling languages for building web pages.
- **JavaScript**: A programming language for adding interactivity to web applications.
- **Git**: A version control system for tracking changes and collaborating on projects.
- **Tailwind CSS**: A utility-first CSS framework used for styling components and creating a responsive design.
- **Material-Tailwind**: A UI kit built on top of Tailwind CSS that provides Material Design components and styles.
- **Render.com**: This app is deployed and hosted in render.com. A platform for hosting and deploying web applications. 
- **tailwind.config.js**: The `tailwind.config.js` file contains the Tailwind CSS configuration for this project, including various modifications and customizations to the default Tailwind settings to better suit the project's needs.
  - **Theme Extension**: Includes additional screen breakpoints and custom letter spacing to enhance responsive design and typography.
    - *Screens Extension*: Adds an additional screen breakpoint named xsm with a maximum width of 279px. This breakpoint can be used in responsive designs to target smaller viewports.
    - *Letter Spacing Extension*: Defines a custom letter spacing named "widest-plus" with a value of "0.3em". This can be applied to text elements to achieve a specific letter spacing effect.

## Components
- **Header**: The `Header` component in this project serves as the top navigation bar.
    - *Navigation Elements*: Displays navigation elements such as "STORIES" and "Courses" using semantic HTML tags and Tailwind CSS classes for styling.
    - *Logo Link*: Utilizes a Link component from react-router-dom to create a clickable logo that redirects users to the home page ("/").
    - *Courses Button*: Utilizes the `Button` component from Material Tailwind (`@material-tailwind/react`) to create a call-to-action button for accessing courses.


- **Background**: The `Background` component in this project is responsible for rendering a background image based on data fetched from the profileData.json file.
    - *Dynamic Background*: Utilizes data from the profileData.json file to dynamically render background images.
- **UserDetail1**: The `UserDetail1` component is responsible for rendering user details based on data fetched from the profileData.json file. It constructs the layout for a user profile, displaying information such as the user's name, badges, followers, and following count. This component is used to construct the layout for displaying user information within the application.
    - *Dynamic User Information*: Utilizes data from the profileData.json file to dynamically render user details, including profile image, name, badges, followers, and following count.
    - *Chip Component*: Utilizes the `Chip` component from Material Tailwind (`@material-tailwind/react`) to display follower and following counts in a stylized manner.
- **UserDetail2**: The `UserDetail2` component complements the user profile information by displaying additional details like the user's bio, links, and associated icons based on data fetched from the profileData.json file. This component is integrated into the user profile view, specifically handling the rendering of the user's bio, links, and associated icons.
    - *Dynamic User Information Display*: Renders user bio and links dynamically from the provided profileData.json file.
- **PostsNumber**: The `PostsNumber` component is responsible for displaying the number of posts made by the user, utilizing data fetched from the profileData.json file. This component is integrated into the user profile view to showcase the total count of posts made by the user.
    - *Dynamic Post Count Display*: Renders the number of posts dynamically from the provided profileData.json file.
- **Posts**: The `Posts` component is responsible for displaying a list of posts fetched from the profileData.json file. It utilizes the Accordion component from Material Tailwind React to create collapsible sections for each post.
    - *Dynamic Post Display*: Renders a list of posts dynamically from the provided profileData.json file.
    - *Collapsible Post Sections*: Utilizes the Accordion component to allow users to expand and collapse individual post sections for easy navigation.
- **Footer**: The `Footer` component is responsible for displaying footer details associated with individual posts, such as the post's title, author, publication date, time, and view count. This component is utilized within the posts section to provide additional information about each post.
    - *Dynamic Footer Display*: Renders footer details dynamically, utilizing data from the profileData.json file.

## Plugins/dependencies
- **@material-tailwind/react@2.1.4**: Library for Material Design components built on Tailwind CSS.
- **tailwindcss@3.3.5**: Utility-first CSS framework for styling.
- **prettier-plugin-tailwindcss@0.5.7**: Prettier plugin for formatting Tailwind CSS.
- **react-dom@18.2.0**: React package for DOM rendering.
- **react-router-dom@6.18.0**: React bindings for routing.
- **react@18.2.0**: Core React library.
- **react-scripts@5.0.1**: React scripts for development.

## Installation
To run this portfolio locally, follow these steps:

1. Clone the repository: `git clone https://github.com/Benju2205/New-Portfolio.git`
2. Navigate to the project directory: `cd profile-screen`
3. Install the dependencies: `npm install`
4. Start the development server: `npm start`
5. Open your browser and visit: `http://localhost:3000`

## Feedback and Contributions
- If you have any feedback, suggestions, or bug reports, please create an issue in the repository.

- Contributions are welcome! If you'd like to contribute to this project, fork the repository, make your changes, and submit a pull request.

