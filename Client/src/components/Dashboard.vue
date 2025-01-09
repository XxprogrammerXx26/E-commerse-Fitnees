<!-- 
<template>
    <div>
      <h2>Welcome to your Dashboard</h2>
      <button @click="handleLogout">Logout</button>
    </div>
  </template>
  
  <script setup>

  import { getAuth, signOut } from 'firebase/auth';
  import { useRouter } from 'vue-router'; 
  import { auth } from '../firebase';
  
  const router = useRouter();
  
  const handleLogout = async () => {
    try {
      await signOut(auth); 
      router.push('/login'); 
    } catch (error) {
      console.error('Error logging out: ', error.message);
    }
  };
  </script>
   -->














   <!-- <template>
    <div>
     
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          
          <a class="navbar-brand" href="#">
            <i class="bi bi-house-door"></i> FitnessHub
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          
         
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
            
              <li class="nav-item">
                <a class="nav-link active" href="#">
                  <i class="bi bi-house-door"></i> Home
                </a>
              </li>
           
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <i class="bi bi-graph-up"></i> Dashboard
                </a>
              </li>
             
              <li class="nav-item">
                <a class="nav-link" href="/shop">
                  <i class="bi bi-bag"></i> Shop
                </a>
              </li>
              
              <li class="nav-item">
                <a class="nav-link" href="/about">
                  <i class="bi bi-info-circle"></i> About
                </a>
              </li>
              
              <li class="nav-item">
                <a class="nav-link" href="/contact">
                  <i class="bi bi-envelope"></i> Contact
                </a>
              </li>
           
              <li class="nav-item">
                <a class="nav-link" href="/cart">
                  <i class="bi bi-cart"></i> Cart ({{ cartItemCount }})
                </a>
              </li>
             
              <li class="nav-item">
                <a class="nav-link" href="/profile">
                  <i class="bi bi-person-circle"></i> Profile
                </a>
              </li>




              
              <li class="nav-item">
                <button class="btn btn-danger" @click="handleLogout">
                  <i class="bi bi-box-arrow-right"></i> Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    
      
      <div class="container mt-4">
        <h2>Welcome to your Dashboard</h2>
        <p>Manage your account, check your progress, and shop for the best fitness products!</p>
      </div>
    </div>
  </template>
  



  <script setup>
  import { getAuth, signOut } from 'firebase/auth';
  import { useRouter } from 'vue-router'; 
  import { auth } from '../firebase';
  import { ref } from 'vue';
  
  const router = useRouter();
  
  
  const cartItemCount = ref(0);
  
  
  const handleLogout = async () => {
    try {
      await signOut(auth);  
      router.push('/login'); 
    } catch (error) {
      console.error('Error logging out: ', error.message);
    }
  };
  </script>
  









  <style scoped>

  
  .navbar {
    margin-bottom: 20px;
  }
  
  .nav-link {
    font-size: 1.1rem;
    padding: 10px 15px;
  }
  
  .navbar-brand {
    font-weight: bold;
    font-size: 1.5rem;
  }
  
  .btn-danger {
    padding: 5px 15px;
  }
  
  .bi-person-circle {
    font-size: 1.5rem;
  }
  
  h3 {
    margin-top: 20px;
  }
  

  i {
    font-size: 1.2rem; /* Increase icon size */
    margin-right: 8px; /* Space between icon and text */
  }
  </style>
   -->







































   <template>
    <div>
      
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          
          <a class="navbar-brand" href="#">
            <i class="bi bi-house-door"></i> FitnessHub
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          
       

          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
            

              <li class="nav-item">
                <a class="nav-link active" href="#">
                  <i class="bi bi-house-door"></i> Home
                </a>
              </li>
           

              <li class="nav-item">
                <a class="nav-link" href="#">
                  <i class="bi bi-graph-up"></i> Dashboard
                </a>
              </li>
         

              <li class="nav-item">
                <a class="nav-link" href="/shop">
                  <i class="bi bi-bag"></i> Shop
                </a>
              </li>
            

              <li class="nav-item">
                <a class="nav-link" href="/about">
                  <i class="bi bi-info-circle"></i> About
                </a>
              </li>
        

              <li class="nav-item">
                <a class="nav-link" href="/contact">
                  <i class="bi bi-envelope"></i> Contact
                </a>
              </li>
          

              <li class="nav-item">
                <a class="nav-link" href="/cart">
                  <i class="bi bi-cart"></i> Cart ({{ cartItemCount }})
                </a>
              </li>
            
              
          
              <li class="nav-item">
                <a class="nav-link" href="/profile">
                  <i class="bi bi-person-circle"></i> Profile
                </a>
              </li>


              <li class="nav-item">
                <button class="btn btn-danger" @click="handleLogout">
                  <i class="bi bi-box-arrow-right"></i> Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    
     
      <div class="container mt-4">
        <h2>Welcome to my Website</h2>
        <p>Manage your account, check your progress, and shop for the best fitness products!</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { getAuth, signOut } from 'firebase/auth';
  import { useRouter } from 'vue-router'; 
  import { auth } from '../firebase';
  import { ref } from 'vue';
  
  const router = useRouter();
  
  
  const cartItemCount = ref(0);
  
 
  const handleLogout = async () => {
    try {
      await signOut(auth);  
      router.push('/login'); 
    } catch (error) {
      console.error('Error logging out: ', error.message);
    }
  };
  </script>
  
  <style scoped>
 
  .navbar-nav .nav-item {
    display: flex;
    align-items: center;
  }
  

  
  .navbar {
    margin-bottom: 20px;
  }
  
  .nav-link {
    font-size: 1.1rem;
    padding: 10px 15px;
  }
  
  .navbar-brand {
    font-weight: bold;
    font-size: 1.5rem;
  }
  
  .btn-danger {
    padding: 5px 15px;
  }
  
  .bi-person-circle {
    font-size: 1.5rem;
  }
  
  h3 {
    margin-top: 20px;
  }
  
  i {
    font-size: 1.2rem; 
    margin-right: 8px;
  }
  </style>
  

