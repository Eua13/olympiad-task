Olympiad Task 

What we expect to have. 
We should have fully functioning application with the backend and frontend clients.

Before you start the development, make sure to create new public repository and push existing code to the origin. Steps are described below:
1. Create public repository in GitHub. 
2. In the project directory run "git init" 
3. Link to the origin by running "git remote add origin [LINK-TO-YOUR-GITHUB-REPO]
4. To check the integration run: 
   1. git add --all
   2. git commit -m "Initial commit"
   3. git push origin main

The resultys wil be checked based on your repositorty.

You can chose to implementy only front-end (3 hours) or back-end (3 hours) applications or both (5 hours). 

Please make sure to send your code base repo link to ```narek_hovsepyan@epam.com``` and mention the team name in the email subject. 

## Frontend requirements

We need to have application for finding the routes. 
Please refer to design https://www.figma.com/file/kLMyHzw6cTLRtHduJigOqU/trafic-admin?node-id=1%3A98  5&t=fvjLLurh5pSrNem2-0

We need to have 3 pages on each of them we need to have different functionalities.
We need to navigate between the pages without reloading the page.

While we are loading some date on all the pages we need to show loading bar.

1) Traffic page 
   1) We need to show the list of routes and give possibility to search routes based on criteria.
   2) The table should show first 10 items from the list and have pagination.
   3) Columns can be sorted based on workload index column.
   4) Search by route id for more information please refer to API docs.
   5) Filters:
      1) By workload index 
      2) By usage index 
      3) By starting point
      4) By end point

2) Overview
   1) Average of workload index
   2) Top 10 most loaded routes for last 3 days. (Load report)
   3) Top 10 most used routes for last 3 days. (usage report)
   4) Busy hours
   5) Filters:
      1) We need to select start and end address and only after that charts will appear on the screen.
      2) if the data will not be found you should show "No Data".
3) CSV
   1) we need to parse the CSV file from the static resource path in backend and write the data into db.
   2) All data should be stored in the DB and returned back to frontend without pagination.
   3) Fronted should take that list and make it pageable and sortable by workload index and usage index.
