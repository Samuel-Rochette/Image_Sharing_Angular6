# Image Sharing App Angular 6

This is a sample front end web applications which allows users to upload and share images in a public gallery. This project was made using Angular version 6. The purpose of this program was to refine my understanding of authorization, and to learn how to make scalable web applications which serve static files from the back end server.

### Features

* Register/Login using JSON web Token
* View all images in a public gallery which is organized into pages using Angular Material Paginator
* Home page features a button which serves one single random image from the gallery
* Upload images to the back end server along with a name and description of the picture\*
* View and delete uploaded images\*
* When an image from the gallery is clicked, the user is brought to an image detail page where they can view the image at the highest resolution. This also reveals the image description and comments which have been posted to the image
* From the image detail page the user can post comments for that specific image\*
* Images can be saved to a list of favorites which can viewed exclusively in a filtered gallery page\*

\* requires user to be logged into an account

### Known Issues

* Account becomes invalid after certain http requests to the back end return an unhandled error. The user is unable to login after this, and must make a new account. This issue was fixed on the back end, so the http requests which were causing this problem work as intended now. This issue hasn't occurred since the latest commit, however this problem has not been extensively tested and I cannot guarantee it will not happen.

### Download and Deploy this project

1.  Download and extract the zip file for this project or download using git clone
2.  Install dependencies using `npm install`
3.  Configure baseURL found in src/environments to the back end server (repository for the back end of this project can also be found on my GitHub page)
4.  Run the application using `npm run start`
