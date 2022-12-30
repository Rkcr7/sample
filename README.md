# JA1

## Getting started

To make it easy for you to get started with GitLab, here's a list of recommended next steps.

Already a pro? Just edit this README.md and make it your own. Want to make it easy? [Use the template at the bottom](#editing-this-readme)!

## Add your files

- [ ] [Create](https://docs.gitlab.com/ee/user/project/repository/web_editor.html#create-a-file) or [upload](https://docs.gitlab.com/ee/user/project/repository/web_editor.html#upload-a-file) files
- [ ] [Add files using the command line](https://docs.gitlab.com/ee/gitlab-basics/add-file.html#add-a-file-using-the-command-line) or push an existing Git repository with the following command:

```
cd existing_repo
git remote add origin https://gitlab.blr.teksystems.com/freshers_2022/ja1.git
git branch -M main
git push -uf origin main
```

## Integrate with your tools

- [ ] [Set up project integrations](https://gitlab.blr.teksystems.com/freshers_2022/ja1/-/settings/integrations)

## Collaborate with your team

- [ ] [Invite team members and collaborators](https://docs.gitlab.com/ee/user/project/members/)
- [ ] [Create a new merge request](https://docs.gitlab.com/ee/user/project/merge_requests/creating_merge_requests.html)
- [ ] [Automatically close issues from merge requests](https://docs.gitlab.com/ee/user/project/issues/managing_issues.html#closing-issues-automatically)
- [ ] [Enable merge request approvals](https://docs.gitlab.com/ee/user/project/merge_requests/approvals/)
- [ ] [Automatically merge when pipeline succeeds](https://docs.gitlab.com/ee/user/project/merge_requests/merge_when_pipeline_succeeds.html)

## Test and Deploy

Use the built-in continuous integration in GitLab.

- [ ] [Get started with GitLab CI/CD](https://docs.gitlab.com/ee/ci/quick_start/index.html)
- [ ] [Analyze your code for known vulnerabilities with Static Application Security Testing(SAST)](https://docs.gitlab.com/ee/user/application_security/sast/)
- [ ] [Deploy to Kubernetes, Amazon EC2, or Amazon ECS using Auto Deploy](https://docs.gitlab.com/ee/topics/autodevops/requirements.html)
- [ ] [Use pull-based deployments for improved Kubernetes management](https://docs.gitlab.com/ee/user/clusters/agent/)
- [ ] [Set up protected environments](https://docs.gitlab.com/ee/ci/environments/protected_environments.html)

---

# Editing this README

When you're ready to make this README your own, just edit this file and use the handy template below (or feel free to structure it however you want - this is just a starting point!). Thank you to [makeareadme.com](https://www.makeareadme.com/) for this template.

## Suggestions for a good README

Every project is different, so consider which of these sections apply to yours. The sections used in the template are suggestions for most open source projects. Also keep in mind that while a README can be too long and detailed, too long is better than too short. If you think your README is too long, consider utilizing another form of documentation rather than cutting out information.

## Name

Choose a self-explaining name for your project.

## Description

Let people know what your project can do specifically. Provide context and add a link to any reference visitors might be unfamiliar with. A list of Features or a Background subsection can also be added here. If there are alternatives to your project, this is a good place to list differentiating factors.

## Badges

On some READMEs, you may see small images that convey metadata, such as whether or not all the tests are passing for the project. You can use Shields to add some to your README. Many services also have instructions for adding a badge.

## Visuals

Depending on what you are making, it can be a good idea to include screenshots or even a video (you'll frequently see GIFs rather than actual videos). Tools like ttygif can help, but check out Asciinema for a more sophisticated method.

## Installation

Within a particular ecosystem, there may be a common way of installing things, such as using Yarn, NuGet, or Homebrew. However, consider the possibility that whoever is reading your README is a novice and would like more guidance. Listing specific steps helps remove ambiguity and gets people to using your project as quickly as possible. If it only runs in a specific context like a particular programming language version or operating system or has dependencies that have to be installed manually, also add a Requirements subsection.

## Usage

Use examples liberally, and show the expected output if you can. It's helpful to have inline the smallest example of usage that you can demonstrate, while providing links to more sophisticated examples if they are too long to reasonably include in the README.

## Support

Tell people where they can go to for help. It can be any combination of an issue tracker, a chat room, an email address, etc.

## Roadmap

If you have ideas for releases in the future, it is a good idea to list them in the README.

## Contributing

State if you are open to contributions and what your requirements are for accepting them.

For people who want to make changes to your project, it's helpful to have some documentation on how to get started. Perhaps there is a script that they should run or some environment variables that they need to set. Make these steps explicit. These instructions could also be useful to your future self.

You can also document commands to lint the code or run tests. These steps help to ensure high code quality and reduce the likelihood that the changes inadvertently break something. Having instructions for running tests is especially helpful if it requires external setup, such as starting a Selenium server for testing in a browser.

## Authors and acknowledgment

Show your appreciation to those who have contributed to the project.

## License

For open source projects, say how it is licensed.

## Project status

If you have run out of energy or time for your project, put a note at the top of the README saying that development has slowed down or stopped completely. Someone may choose to fork your project or volunteer to step in as a maintainer or owner, allowing your project to keep going. You can also make an explicit request for maintainers.

## API working

1. To create new Employee "http://localhost:8080/create/"
   ( POST with raw-json dummy data for post is in seeders text file)

2. To get all Employees Data "http://localhost:8080/getall/"
   (GET)

3. To get data of Specific Employee "http://localhost:8080/get/:id"
   (id of requested employee) (GET)

4. To update data of Specific Employee "http://localhost:8080/update/:id"
   (use PATCH request for updating)

5. To delete Specific Employee "http://localhost:8080/delete/:id"
   (Use DELETE request for deleting)

6. To search Employee by their employee id or list of employees starting with enetered no.
   ""http://localhost:8080/search/:Key""
   (Use GET request with emp id in place of key)

7. To update or upload profile pic "http://localhost:8080/upload/:id"
   (use PATCH request for it also for uploading select body as form-data and in key column mention "profile" and select file to upload)

8. To get Dashboard details of the employee "http://localhost:8080/dashboard/:id"
   (GET)

9. To get profile details of the employee "http://localhost:8080/profiledetail/:id"
   (GET)

### Seeder data

##### Send to POST request at http://localhost:8080/create/

{"password":"ritik@CR7",
"username":"rkcr7",
"emp_id": "5728",
"designation": "HR",
"first_name": "Ritik",
"last_name": "Sharma",
"display_name": "Ritik Sharma",
"email": "ritikrkcr7@gmail.com",
"isActive": true,
"isDeleted": false,
"createdAt": "2022-10-12",
"updatedAt": "2022-10-18",
"addedBy": "Anchan",
"updatedBy": "None",
"gender": "Male",
"personal_info": {
"dob": "2000-02-23",
"adhaar": "5073 4912 XXXX",
"pan_no": "JPLPS315XX",
"passport": "VJ7ES5N",
"passport_exp_date": "20 May 2032",
"address": "#165/9 near canel rest house , railway station road , Yamunanagar-Haryana-135001",
"phone_no": "+91 9991448771",
"telephone_no": "none",
"nationality": "Indian",
"religion": "Hindu",
"martial_status": "Single",
"employment_of_spouse": "NA",
"childrens": "NA"
},

"emergency_info":[
{
"name": "Sandeep Sharma",
"relation": "Father",
"contact_no": "+91 9355320997"
},
{
"name": "Ritu",
"relation": "Mother",
"contact_no": "+91 8572020997"
}
],

"bank_info": {
"bank_name": "State Bank Of India",
"bank_acc_no": "12341500021XXX",
"ifsc_code": "SBIN0388XXX",
"pan_no": "JPLPS3158N"
},

"family_info":[
{
"name": "Sandeep Sharma",
"relation": "father",
"dob": "24th march 1970",
"phone_no": "+91 9355320997"
},
{
"name": "Ritu",
"relation": "Mother",
"dob": "8th September 2000",
"phone_no": "+91 8572020997"
}
],
"educational_info": [
{
"institute_name": "Chandigarh Group of colleges , Landran-Punjab",
"degree": "B.Tech",
"start_year": "2018",
"end_year": "2022"
},
{
"institute_name": "Swami vivekanand public school , Yamunanagar",
"degree": "Intermediate",
"start_year": "2017",
"end_year": "2018"
}

],

"professional_info": {
"experience": {
"1": "Internship at Teksystems feb 2022-june2022",
"2": "Full time Associate Engineer at Teksystems from sep2 022"
},
"skills": [
"Python",
"Angular",
"java"
],
"clients": [
"Apple",
"WeWork",
"Samsung"
],
"completed_projects":3,
"pending_projects":2,
"remaining_leaves":17,
"taken_leaves":5,
"approved_allowance":32,
"remaining_allowance":8,
"projects_assigned": [
"Project-A",
"Project-B",
"Project-C",
"Project-D",
"Project-E"
],
"reporting_manager": "Sowmya L Rao",
"doj": "12th Sepetember 2022"
}
}

### Holiday Seeder Data

##### Use insert document in MongoDb in Holidays Collection

{

"holidays": [
{
"date": {
"$date": {
"$numberLong": "1643155200000"
}
},
"day": "Wednesday",
"name": "Republic Day"
},
{
"date": {
"$date": {
"$numberLong": "1646092800000"
}
},
"day": "Tuesday",
"name": "Maha Shivarathri"
},
{
"date": {
"$date": {
"$numberLong": "1647561600000"
}
},
"day": "Friday",
"name": "Holi"
},
{
"date": {
"$date": {
"$numberLong": "1649980800000"
}
},
"day": "Friday",
"name": "Good Friday"
},
{
"date": {
"$date": {
"$numberLong": "1651536000000"
}
},
"day": "Tuesday",
"name": "Ramzan (Idul Fitr)"
},
{
"date": {
"$date": {
"$numberLong": "1660521600000"
}
},
"day": "Monday",
"name": "Independence Day"
},
{
"date": {
"$date": {
"$numberLong": "1661904000000"
}
},
"day": "Wednesday",
"name": "Ganesha Chathurthi"
},
{
"date": {
"$date": {
"$numberLong": "1664928000000"
}
},
"day": "Wednesday",
"name": "Dasara /Vijaya Dashami"
},
{
"date": {
"$date": {
"$numberLong": "1666656000000"
}
},
"name": "Diwali",
"day": "Tuesday"
},
{
"date": {
"$date": {
"$numberLong": "1667433600000"
}
},
"day": "Tuesday",
"name": "Kannada Rajyotsava"
},
{
"date": {
"$date": {
"$numberLong": "1671926400000"
}
},
"day": "Sunday",
"name": "Christmas"
},
{
"date": {
"$date": {
"$numberLong": "1672444800000"
}
},
"day": "",
"name": "No more holidays"
}
]
}

### Projects Seeder Data

##### Insert seeder in MongoDB in Projects collection

[{
"\_id": {
"$oid": "6374b714649e78a450c449b7"
},
"projects": [
{
"project_title": "Management",
"open_tasks": 5,
"completed_tasks": 13,
"project_description": "Business management is the coordination and organization of business activities. Business managers oversee operations and help employees reach their top productivity levels. A business manager may also supervise or train new employees, help a business reach its operational and financial objectives.",
"project_leader": "",
"team_members": "",
"progress": "20"
},
{
"project_title": "Hospital Administration",
"open_tasks": 13,
"completed_tasks": 19,
"project_description": "Business management is the coordination and organization of business activities. Business managers oversee operations and help employees reach their top productivity levels. A business manager may also supervise or train new employees, help a business reach its operational and financial objectives.",
"project_leader": "",
"team_members": "",
"progress": "55"
},
{
"project_title": "Project Management",
"open_tasks": 16,
"completed_tasks": 12,
"project_description": "Business management is the coordination and organization of business activities. Business managers oversee operations and help employees reach their top productivity levels. A business manager may also supervise or train new employees, help a business reach its operational and financial objectives.",
"project_leader": "",
"team_members": "",
"progress": "32"
},
{
"project_title": "Video Calling App",
"open_tasks": 9,
"completed_tasks": 12,
"project_description": "Business management is the coordination and organization of business activities. Business managers oversee operations and help employees reach their top productivity levels. A business manager may also supervise or train new employees, help a business reach its operational and financial objectives.",
"project_leader": "",
"team_members": "",
"progress": "68"
},
{
"project_title": "Office Management",
"open_tasks": 14,
"completed_tasks": 3,
"project_description": "Business management is the coordination and organization of business activities. Business managers oversee operations and help employees reach their top productivity levels. A business manager may also supervise or train new employees, help a business reach its operational and financial objectives.",
"project_leader": "",
"team_members": "",
"progress": "79"
},
{
"project_title": "Yulu Project",
"open_tasks": 15,
"completed_tasks": 3,
"project_description": "Business management is the coordination and organization of business activities. Business managers oversee operations and help employees reach their top productivity levels. A business manager may also supervise or train new employees, help a business reach its operational and financial objectives.",
"project_leader": "",
"team_members": "",
"progress": "45"
}
]
}]

### HR Dashboard Seeder Data

##### Send to POST request at http://localhost:8080/createHrDashboard/

{
"projects": 112,
"clients": 44,
"tasks": 37,
"employees": 218,
"totalIncome": {
"labels": ["2006", "2007", "2008", "2009", "2010","2011", "2012"],
"data": [ 100, 75, 50, 75, 50, 75, 100 ]
},
"totalOutcome": {
"labels": ["2006", "2007", "2008", "2009", "2010","2011", "2012"],
"data": [90, 65, 40, 65, 40, 65, 90 ]
},
"totalSales": {
"labels": ["2006", "2007", "2008", "2009", "2010","2011", "2012"],
"data": [ 50, 75, 50, 75, 50, 75, 100 ]
},
"totalRevenue": {
"labels": ["2006", "2007", "2008", "2009", "2010","2011", "2012"],
"data": [ 90, 65, 40, 65,40, 65, 50 ]
},  
 "newEmployees": 10,
"overAllEmployees": 218,
"earnings": 142300,
"previousEarnings": 115852,
"expenses": 8500,
"previousExpenses": 7500,
"profits": 112000,
"previousProfits": 142000,
"statistics": {
"today_Leave": [4,65],
"pending_Invoice": [15, 92],
"completed_Projects": [85, 112],
"open_Tickets": [190, 212],
"closed_Tickets": [22, 212]
},
"task_Statistics": {
"overdue_Tasks": 19,
"completed_Tasks": 166,
"inprogress_Tasks": 115,
"onHold_Tasks": 31,
"pending_Tasks": 47,
"review_Tasks": 5
},
"total_absent": [
{
"absent_name": "Martin Lewis",
"absent_date": "04 Sep 2012"
},
{
"absent_name": "Martin Lewis",
"absent_date": "04 Sep 2012"
}
],
"client_details": [
{
"client_name": "Daniel Deacon",
"client_post": "CEO",
"client_email": "barrycuda@example.com",
"client_status": true
},
{
"client_name": "Tressa Wexler",
"client_post": "Manager",
"client_email": "tressawexler@example.com",
"client_status": false
},
{
"client_name": "Ruby Bartlett",
"client_post": "CEO",
"client_email": "rubybartlett@example.com",
"client_status": false
},
{
"client_name": "Misty Tison",
"client_post": "CEO",
"client_email": "mistytison@example.com",
"client_status": true
},
{
"client_name": "Daniel Deacon",
"client_post": "CEO",
"client_email": "danieldeaon@example.com",
"client_status": false
}
],
"recent_projects":[
{
"project_name": "Office Management",
"open_task": 1,
"completed_task": 9,
"progress": 30
},
{
"project_name": "Project Management",
"open_task": 2,
"completed_task": 5,
"progress": 20
},
{
"project_name": "Video Calling App",
"open_task": 3,
"completed_task": 3,
"progress": 50
},
{
"project_name": "Hospital Administration",
"open_task": 12,
"completed_task": 4,
"progress": 60
},
{
"project_name": "Digital Marketplace",
"open_task": 7,
"completed_task": 14,
"progress": 100
}
]
}

### Steps for the project Setup.

1. Clone the project in the local system.
2. Pull the project from the remote repository.
3. Run npm install to install the required dependencies.
4. Run the server first
5. Push seeders data first in respective collection (Seeder data available above.)
6. Create user by using POST request of create & send seeder data
7. Now run ng serve in Client & application will run
8. Register some user with different roles
9. Once the user is created they can login using the username and password.
