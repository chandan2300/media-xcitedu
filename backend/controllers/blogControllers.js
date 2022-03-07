const asyncHandler = require("express-async-handler");
const Blog = require("../models/blogModel");

/*
LIST OF CONTROLLERS
1. Create a new Blog 
2. Get all Blogs - for every user
3. Get all frontend Blogs - for every user
4. Get all backend Blogs - for every user
5. Get all database Blogs - for every user
6. Get all fullstack Blogs - for every user
7. Get all designing Blogs - for every user
8. Get Details of Blog by ID
9. Pay using Razorpay
10. Get details of all Other Blogs
11. Add a chapter
*/

// Create a new Blog
const createBlog = asyncHandler(async (req, res) => {
    const {
        userId,
        title,
        type,
        image,
        description,
        body,
        tags
    } = req.body;
    // const instructorId = req.user._id;
    //   console.log(req.body);
    const newBlog = await Blog.create({
        userId,
        title,
        type,
        image,
        description,
        body,
        tags
    });

    if (newBlog) {
        res.status(201).json({
            success: true,
            data: newBlog,
        });
    } else {
        res.status(400).json({
            success: false,
            message: "Blog not Created Successfully",
        });
    }
});

// Create a new chapter
// const createChapter = asyncHandler(async (req, res) => {
//   const {
//     chapterNumber,
//     chapterName,
//     chapterVideoLink,
//     chapterVideoDescription,
//     chapterStudyMaterial,
//   } = req.body;
//   const BlogId = req.params.id;
// console.log(BlogId);
// await Blog.findOneAndUpdate(
//   { _id: BlogId },
//   {
//     $push: {
//       chapters: {
//         chapterNumber: chapterNumber,
//         chapterName: chapterName,
//         chapterVideoLink: chapterVideoLink,
//         chapterVideoDescription: chapterVideoDescription,
//         chapterStudyMaterial,
//       },
//     },
//   },
//   function (error, success) {
//     if (error) {
//       console.log(error);
//     } else {
//       console.log(success);
//     }
//   }
// );

//   const Blog = await Blog.findById(req.params.id);
//   // console.log(Blog);

//   if (Blog) {
//     if (Blog.chapters) {
//       if (Blog.chapters.length === 0) {
//         Blog.chapters = [
//           {
//             chapterNumber,
//             chapterName,
//             chapterVideoLink,
//             chapterVideoDescription,
//             chapterStudyMaterial,
//           },
//         ];
//         const updatedBlog = await Blog.save();
//         // res.status(200).json({
//         //   success: true,
//         //   data: updatedBlog,
//         // });
//         // Blog.save();
//       } else {
//         Blog.chapters.push({
//           chapterNumber,
//           chapterName,
//           chapterVideoLink,
//           chapterVideoDescription,
//           chapterStudyMaterial,
//         });
//         const updatedBlog = await Blog.save();
//         // res.status(200).json({
//         //   success: true,
//         //   data: updatedBlog,
//         // });
//       }
//     } else {
//       Blog.chapters = [
//         {
//           chapterNumber,
//           chapterName,
//           chapterVideoLink,
//           chapterVideoDescription,
//           chapterStudyMaterial,
//         },
//       ];
//       // Blog.save();
//       // const updatedBlog = await Blog.save();
//       // res.status(200).json({
//       //   success: true,
//       //   data: updatedBlog,
//       // });
//     }
//     // await Blog.save();
//     // res.status(201).json({
//     //   success: true,
//     //   data: Blog,
//     // });
//   } else {
//     res.status(400).json({
//       success: false,
//       message: "Chapter not added Successfully",
//     });
//   }
// });

// Get details of all Blogs
const getAllBlogs = asyncHandler(async (req, res) => {
    const Blogs = await Blog.find({});
    if (Blogs.length > 0) {
        res.status(200).json({
            success: true,
            data: Blogs,
        });
        // console.log("All Blogs found");
        // console.log();
    } else {
        res.status(200).json({
            success: false,
            data: "No Blog found",
        });
    }
});

// Get details of all Frontend Blogs
const getAllBusinessBlogs = asyncHandler(async (req, res) => {
    const Blogs = await Blog.find({ type: "business" });
    if (Blogs.length > 0) {
        res.status(200).json(Blogs);
    } else {
        res.status(404).json({
            message: "No Business Blog found",
        });
    }
});

// Get details of all Backend Blogs
const getAllAffiliateBlogs = asyncHandler(async (req, res) => {
    const Blogs = await Blog.find({ type: "affiliate" });
    if (Blogs.length > 0) {
        res.status(200).json(Blogs);
    } else {
        res.status(404).json({
            message: "No Affiliate Blog found",
        });
    }
});

// Get details of all Database Blogs
const getAllSociologyBlogs = asyncHandler(async (req, res) => {
    const Blogs = await Blog.find({ type: "sociology" });
    if (Blogs.length > 0) {
        res.status(200).json(Blogs);
    } else {
        res.status(404).json({
            message: "No Sociology Blog found",
        });
    }
});

// Get details of all Fullstack Blogs
const getAllNewsBlogs = asyncHandler(async (req, res) => {
    const Blogs = await Blog.find({ type: "news" });
    if (Blogs.length > 0) {
        res.status(200).json(Blogs);
    } else {
        res.status(404).json({
            message: "No News Blog found",
        });
    }
});

// Get details of all Designing Blogs
const getAllTechBlogs = asyncHandler(async (req, res) => {
    const Blogs = await Blog.find({ type: "tech" });
    if (Blogs.length > 0) {
        res.status(200).json(Blogs);
    } else {
        res.status(404).json({
            message: "No Tech Blog found",
        });
    }
});

// Get details of all Designing Blogs
const getAllEconomicBlogs = asyncHandler(async (req, res) => {
    const Blogs = await Blog.find({ type: "economic" });
    if (Blogs.length > 0) {
        res.status(200).json(Blogs);
    } else {
        res.status(404).json({
            message: "No Economic Blog found",
        });
    }
});

// Get details of all Other Blogs
const getAllOtherBlogs = asyncHandler(async (req, res) => {
    const Blogs = await Blog.find({ type: "other" });
    if (Blogs.length > 0) {
        res.status(200).json(Blogs);
    } else {
        res.status(404).json({
            message: "No Other Blog found",
        });
    }
});

// Get details of Blog by ID
const getBlogById = asyncHandler(async (req, res) => {
    const foundBlog = await Blog.findById(req.params.id);
    if (foundBlog) {
        // console.log("Particular Blog details", Blog)
        res.status(200).json({
            success: true,
            data: foundBlog,
        });
        console.log("Particular Blog details", foundBlog);
    } else {
        res.status(404).json({
            success: false,
            error: "No Blog found",
        });
    }
});

// Get all Blogs by ID
const getAllBlogsOfUser = asyncHandler(async (req, res) => {
    const Blogs = await Blog.find({ userId: req.params.id });
    if (Blogs) {
        res.status(200).json({
            success: true,
            data: Blogs,
        });
    } else {
        res.status(404).json({
            success: false,
            error: "No Blog found",
        });
    }
});

// Get all Blogs by instructor
const getAllBlogsOfEmployer = asyncHandler(async (req, res) => {
    const Blogs = await Blog.find({ employerId: req.params.id });
    console.log("Hello testing");
    if (Blogs) {
        res.status(200).json({
            success: true,
            data: Blogs,
        });
    } else {
        res.status(404).json({
            success: false,
            error: "No Blog found",
        });
    }
});

module.exports = {
    createBlog,
    getAllBlogs,
    getAllBusinessBlogs,
    getAllAffiliateBlogs,
    getAllTechBlogs,
    getAllSociologyBlogs,
    getAllNewsBlogs,
    getAllEconomicBlogs,
    getAllOtherBlogs,
    getBlogById,
    getAllBlogsOfUser,
    getAllBlogsOfEmployer,
};