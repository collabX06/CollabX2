const Navbar = () => {
    return `
      <nav class="navbar">
        <div>Research Collaboration</div>
        <div>
          <a href="#">Home</a>
          <a href="#">Browse Projects</a>
          <a href="#">Post Idea</a>
          <a href="#">Profile</a>
        </div>
      </nav>
    `;
  };
  
  document.body.insertAdjacentHTML('afterbegin', Navbar());
  