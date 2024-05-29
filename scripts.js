document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('registerForm');
    const loginForm = document.getElementById('loginForm');
    const passwordChoice = document.getElementById('passwordChoice');
    const manualPasswordFields = document.getElementById('manualPasswordFields');
    const generateNicknameButton = document.getElementById('generateNickname');
    const nicknameInput = document.getElementById('nickname');
    const messageDiv = document.getElementById('message');
    let nicknameAttempts = 0;
    const top100Passwords = ['123456', 'password', /* ...add the top 100 passwords... */];
  
    function isPasswordStrong(password) {
      const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,20}$/;
      return strongPasswordRegex.test(password) && !top100Passwords.includes(password);
    }
  
    function generateNickname() {
      const randomNickname = 'User' + Math.floor(Math.random() * 10000);
      nicknameAttempts++;
      return randomNickname;
    }
  
    function validateAge(dob) {
      const birthDate = new Date(dob);
      const today = new Date();
      const age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();
      const dayDiff = today.getDate() - birthDate.getDate();
  
      if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        return age - 1;
      }
  
      return age;
    }
  
    if (passwordChoice) {
      passwordChoice.addEventListener('change', (event) => {
        if (event.target.value === 'manual') {
          manualPasswordFields.style.display = 'block';
        } else {
          manualPasswordFields.style.display = 'none';
        }
      });
    }
  
    if (generateNicknameButton) {
      generateNicknameButton.addEventListener('click', () => {
        if (nicknameAttempts < 5) {
          nicknameInput.value = generateNickname();
        } else {
          nicknameInput.removeAttribute('readonly');
          generateNicknameButton.disabled = true;
        }
      });
    }
  
    if (registerForm) {
      registerForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const phone = document.getElementById('phone').value;
        const email = document.getElementById('email').value;
        const dob = document.getElementById('dob').value;
        const password = document.getElementById('passwordChoice').value === 'manual' ? document.getElementById('password').value : 'GeneratedPassword123!';
        const confirmPassword = document.getElementById('confirmPassword').value;
        const name = document.getElementById('name').value;
        const nickname = document.getElementById('nickname').value;
        const agreement = document.getElementById('agreement').checked;
        const role = document.getElementById('role').value;
  
        // Validate age
        if (validateAge(dob) < 16) {
          messageDiv.textContent = 'You must be at least 16 years old to register.';
          return;
        }
  
        // Validate password
        if (passwordChoice.value === 'manual' && (!isPasswordStrong(password) || password !== confirmPassword)) {
          messageDiv.textContent = 'Password does not meet the criteria or passwords do not match.';
          return;
        }
  
        // Validate agreement
        if (!agreement) {
          messageDiv.textContent = 'You must agree to the User Agreement.';
          return;
        }
  
        // Get existing users from localStorage
        let users = JSON.parse(localStorage.getItem('users')) || [];
  
        // Check if email already exists
        const emailExists = users.some(user => user.email === email);
        if (emailExists) {
          messageDiv.textContent = 'Email is already registered.';
          return;
        }
  
        // Add new user to users array
        users.push({ phone, email, dob, password, name, nickname, role });
        // Save users array back to localStorage
        localStorage.setItem('users', JSON.stringify(users));
        messageDiv.textContent = 'Registration successful!';
      });
    }
  
    if (loginForm) {
      loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const loginEmail = document.getElementById('loginEmail').value;
        const loginPassword = document.getElementById('loginPassword').value;
  
        // Get existing users from localStorage
        let users = JSON.parse(localStorage.getItem('users')) || [];
  
        // Check if email and password match
        const user = users.find(user => user.email === loginEmail && user.password === loginPassword);
        if (user) {
          messageDiv.textContent = 'Login successful!';
          // Store user information in session storage or a global variable
          sessionStorage.setItem('loggedInUser', JSON.stringify(user));
          // Redirect to the main site after successful login
          window.location.href = 'glav.html';
        } else {
          messageDiv.textContent = 'Invalid email or password.';
        }
      });
    }
  
    // Function to handle displaying admin content
    function displayContentBasedOnRole() {
        const loggedInUser = JSON.parse(sessionStorage.getItem('loggedInUser'));
        if (loggedInUser) {
          if (loggedInUser.role === 'admin') {
            const adminBlocks = document.querySelectorAll('.admin-only');
            adminBlocks.forEach(block => block.style.display = 'block');
    
            const adminHiddenBlocks = document.querySelectorAll('.admin-hidden');
            adminHiddenBlocks.forEach(block => block.style.display = 'none');
          } else {
            const adminBlocks = document.querySelectorAll('.admin-only');
            adminBlocks.forEach(block => block.style.display = 'none');
    
            const adminHiddenBlocks = document.querySelectorAll('.admin-hidden');
            adminHiddenBlocks.forEach(block => block.style.display = 'block');
          }
        }
      }
  
    // Call function to display content based on role if on main site
    if (window.location.pathname.endsWith('KR_Khutsaidze_web.html') || window.location.pathname.endsWith('course.html') || window.location.pathname.endsWith('AboutCourse.html') || window.location.pathname.endsWith('reviews.html')) {
        displayContentBasedOnRole();
    }
  });
  