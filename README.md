# Cake-app
- What iam trying to accomplish by working on this project? (The mail GOAL!!)
    - In the last couple of months, i have covered all the technical aspects of building a full stack application. i started from the very basics of HTML, CSS, and JavaScript, and i have now covered all the way to building a full stack application with a database, server, and client. At the end of the day, all these skills are just tools we collected to build a solution to a problem. 

    - Here are the main goals iam trying to acheive right after you complete this project. 
      - The number one goal of this project was to give me a sense of what it is like to work on a real world project 
        - This helped me solidify my understanding of the concepts i have learned so far 
        - Increases my confidence in my skills when you go out and look for a job 
      
      - i will do everyone's job in this project 
        - The Archtect
        - The Designer
        - The Developer
        - The Tester
        - The Business Developer
        - The Project Manager


      - Prepare for the AI lead future 

      - Learn how to work with a team 

      - Learn how to work with a client 

      - Apply the proper security measures to your application (Which is based on the open http protocol) 

      - Learn the deployment process 

      - Learn the business develpment process 

- Business development 
----------------------
  - Defining the problem:
  ----------------------- 
    - Clearly identify gaps in the business process that you can improve with code
    -----------------------------------------------------------------------------   
      - To identify problems, you have to first understand the day to day work flow of the business. 
        - This could be achieved: 
          - By interviewing the business owner  
          - By interviewing the customers
          - By observing the business in action
          - By researching the industry and competitors 
          AI: OR: Ask ChatGPT this 
            What does a typical day to day work flow of a car service company look like?


             Navigation links on my app 
      - Root level public pages  
        - Home page (/) 
        - About us page (/about) 
        - Services page (/services) 
        - Contact us page (/contact) 
        - Login page (/login) 
        - Order details (/order/{orderHash})

      - Admin (Login required) 
        - Admin dashboard (/admin)
        - Employees (/admin/employees) 
        - Add employee (/admin/add-employee) 
        - Edit employee (/admin/employee/edit/:id) 
        - Customers (/admin/customers) 
        - Add customer (/admin/add-customer) 
        - Edit customer (/admin/customer/edit/:id) 
        - Customer details (/admin/customer/{customerId})
        - Add vehicle (/admin/customer/{customerId}) - Conditionally displayed on the customer details page  
        - Orders (/admin/orders) 
        - Add order (/admin/order) 
        - Edit order (/admin/order/{orderHash}/edit) 
        - Services (/admin/services) 
        - Add service (/admin/add-service) 

      - Admin/Private pages with further explanations: 
        - Admin dashboard: (/admin) 
          - To show list of internal pages for the purpose of easier navigation 
        - Employees (/admin/employees)
          - To show list of all added employees 
        - Add employee (/admin/add-employee) 
          - To add a new employee 
        - Edit employee (/admin/employee/edit/:id)
          - To edit an existing employee 
        - Customers (/admin/customers) 
          - To show list of all added customers 
        - Add customer (/admin/add-customer)
          - To add a new customer 
        - Edit customer (/admin/customer/edit/:id)  
          - To edit an existing customer 
        - Orders (/admin/orders) 
          - To show list of all added orders 
        - Add order (/admin/order) 
          - To add a new order 
        - Edit order (/admin/order/{orderHash}/edit) 
          - To update the status of an existing order 
        - Order details (/admin/order/{orderHash})
          - To show the details of an existing order 
          - Customers also use this page to check on the status of their order 
      