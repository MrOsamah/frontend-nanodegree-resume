var bio = {
    "name": "Osamah Alkhamees",
    "role": "Web Developer",
    "contacts": {
        "mobile": "+966-5555-5555",
        "email": "mrosamah@outlook.sa",
        "github": "https://github.com/MrOsamah",
        "twitter": "https://twitter.com/MrOsamah",
        "blog": "http://mrosamah.com/blog",
        "location": "Qasseem - Methnab"
    },
    "welcomeMessage": "Welcome to my online rusume, feel free to contact me",
    "skills": [
        "Programming",
        "Front-End Developing",
        "Graphic Designing",
        "Communicating"
    ],
    "biopic": "images/mypic.jpg",
};

bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    var formattedMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);

    $("#header").append(formattedName,formattedRole,formattedPic,formattedMsg,HTMLskillsStart);

    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var formattedBlog = HTMLblog.replace("%data%", bio.contacts.blog);
    // Display contact information
    $("#footerContacts, #topContacts").append(formattedMobile,formattedEmail,formattedGithub,formattedTwitter,formattedBlog);


    for (var i = 0; i < bio.skills.length; i++) {
        var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
        $("#skills").append(formattedSkills);
    }
};

var education = {
    "schools": [{
        "name": "Qasseem University",
        "location": "Qasseem University",
        "degree": "Bachelor",
        "majors": ["Computer Science"],
        "dates": "2014 - current",
        "url": "http://coc.qu.edu.sa/"
    }],
    "onlineCourses": [{
        "title": "Front-End Web Developer nanodegree",
        "school": "Udacity",
        "dates": "2017-2018",
        "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    }],
    "certificates": [{
        "title": "Computer Hacking Forensic Investigator",
        "school": "EC-Council",
        "dates": "2017",
        "url": "https://www.eccouncil.org/programs/computer-hacking-forensic-investigator-chfi/",
        "location": "Majmaah University"
    }]
};

education.display = function() {

    for (var i = 0; i < education.schools.length; i++) {
        $("#education").append(HTMLschoolStart);

        var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name);
        var formattedSchoolDate = HTMLschoolDates.replace("%data%", education.schools[i].dates);
        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
        var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors);
        var formattedSchoolNameWithURL = formattedSchoolName.replace("%link%", education.schools[i].url);

        $(".education-entry:last").append(formattedSchoolDate,formattedSchoolNameWithURL,formattedSchoolLocation,formattedSchoolDegree,formattedSchoolMajor,"<hr>");
    }

    for (var i = 0; i < education.onlineCourses.length; i++) {
        $("#education").append(HTMLonlineClasses);

        var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
        var formattedOnlineDate = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
        var formattedOnlineTitleWithURL = formattedOnlineTitle.replace("%link%", education.onlineCourses[i].url);

        $(".education-entry:last").append(formattedOnlineDate,formattedOnlineTitleWithURL,formattedOnlineSchool,"<hr>");
    }

    for (var i = 0; i < education.certificates.length; i++) {
        $("#education").append(HTMLcertificates);

        var formattedCertTitle = HTMLcertificateTitle.replace("%data%", education.certificates[i].title);
        var formattedCertSchool = HTMLcertificateSchool.replace("%data%", education.certificates[i].school);
        var formattedCertDate = HTMLcertificateDates.replace("%data%", education.certificates[i].dates);
        var formattedCertLocation = HTMLcertificateLocation.replace("%data%", education.certificates[i].location);
        var formattedCertTitleWithURL = formattedCertTitle.replace("%link%", education.certificates[i].url);

        $(".education-entry:last").append(formattedCertDate,formattedCertTitleWithURL,formattedCertLocation,formattedCertSchool,"<hr>");
    }
};

var work = {
    "jobs": [{
        "employer": "Freelancer",
        "title": "Graphic Designer",
        "location": "Methnab",
        "dates": "2005 - Current",
        "description": "I learned Photoshop early in my life, that thing made me try different types of \
      graphic design, and with the years my skills improved to a level that I am \
      proud of."
    }]
};

work.display = function() {
    for (var i = 0; i < work.jobs.length; i++) {
        $("#workExperience").append(HTMLworkStart);

        var formattedEmploer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
        var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
        var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
        var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
        var formattedWorkDesc = HTMLworkDescription.replace("%data%", work.jobs[i].description);

        $(".work-entry:last").append(formattedWorkDates,formattedEmploer,formattedWorkTitle,formattedWorkLocation,formattedWorkDesc,"<hr>");
    }
};

var projects = {
    "projects": [{
            "title": "Bardyah Website",
            "dates": "2017",
            "description": "Developing a message service website called Bardyah, one \
      of <a href=\"http://cloudsystems.sa/\" target=\"_blank\">CloudSystems.sa</a> Summer Training's projects",
            "images": [
                "images/p1/img1.jpg",
                "images/p1/img2.jpg"
            ],
            "url": "http://mrosamah.com/bardyahpreview"
        },
        {
            "title": "My Website",
            "dates": "2017",
            "description": "Designing my personal website, one of Udacity's Front-End nanodegree's projects",
            "images": [
                "images/p2/img1.jpg",
                "images/p2/img2.jpg"
            ],
            "url": "http://mrosamah.com"
        }
    ]
};

projects.display = function() {
    for (var i = 0; i < projects.projects.length; i++) {
        $("#projects").append(HTMLprojectStart);

        var formattedProjectTittle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
        var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
        var formattedProjectDesc = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
        var formattedProjectTitleWithURL = formattedProjectTittle.replace("%link%", projects.projects[i].url);

        $(".project-entry:last").append(formattedProjectDates,formattedProjectTitleWithURL,formattedProjectDesc);

        for (var j = 0; j < projects.projects[i].images.length; j++) {
            var formattedProjectImages = HTMLprojectImage.replace("%data%", projects.projects[i].images[j]);
            $(".project-entry:last").append(formattedProjectImages);
        }

        $(".project-entry:last").append("<hr>")
    }
};

// call display functions
bio.display();
work.display();
projects.display();
education.display();
$("#mapDiv").append(googleMap);
