

// This function should retrieve all the project objects from projects array.
// It should then traverse over the array to create individual cards displaying each project details.
function loadProjects() {
  // Write your code here
  var projectElement = document.getElementById('projects');
  for (var i = 0; i < projects.length; i++) {
    var projectCard = document.createElement('div');
    projectCard.className = 'project-card';

    // Set the inner HTML for the project card with the project data
    projectCard.innerHTML = `
    <img src="${projects[i].image}" alt="${projects[i].title}">
    <h3>${projects[i].title}</h3>
    <p>${projects[i].description}</p>
`;
    projectElement.appendChild(projectCard);
  }

}

// This function should return the projectId of the new project
function newProjectId(){
 // Write code to create and return new Project Id
 return projects.length + 1; 
}

function saveNewProject() {

  // Write your code here
  // Get the new project details by using the DOM elements
  var title = document.getElementById('title').value;
  var description = document.getElementById('desc').value;
  var image = document.getElementById('image').value;
  // Create the new projectId by calling the newProjectId() function
  // Create a new project object
  var newProject = {
    id: newProjectId(),
    title: title,
    description: description,
    image: image
};

  // Add the new project object to the projects array 
  projects.push(newProject);

  // Load the projects after adding the new project
  loadProjects();

  // Clear the values of the New Project Details Form after adding the new project
  document.getElementById("title").value = "";
  document.getElementById("desc").value = "";
  document.getElementById("image").value = "";
}
