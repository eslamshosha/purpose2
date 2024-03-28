import Signin from './pages/signIn/Signin';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './pages/Layout';
import { Suspense, lazy } from 'react';
import NotFound from './pages/shared-components/NotFound';
import Main from './pages/Main/Main';
import Signup from './pages/signUp/components/Signup';
import Subjects from './pages/Main/Subjects';
import RecommendedCourses from './pages/Main/Recommended/RecommendedCourses';
import RecordedLessons from './pages/Main/RecordedLesons/RecordedLessons';
import Blog from './pages/Main/Blog/Blog';
import Competitions from './pages/Main/Competitions/Competitions';
import PersonalProfile from './pages/Social/PersonalProfile';
import Friends from './pages/Social/Friends';
import Messages from './pages/Social/Messages';
import CourseDetails from './pages/Main/CourseDetails/CourseDetails';
import LearningBoard from './pages/Main/LearningBoard/LearningBoard';
import LiveLessons from './pages/Main/LiveLessons';
import BlogFocus from './pages/Main/Blog/BlogFocus';
import BlogInfo from './pages/Main/Blog/BlogInfo';
import SocialHome from './pages/Social/SocialHome';
import AddProject from './pages/Social/AddProject';
import Leaderboard from './pages/Main/Leaderboard/Leaderboard';
import Exam from './pages/Main/Competitions/Exam';
import Settings from './pages/Social/Settings';
import ECommerce from './pages/Main/ECommerce';
import Payment from './pages/shared-components/Payment';
import MainPayment from './pages/Main/MainPayment';
import Assessment from './pages/Main/Assessment/Assessment';
import AssessmentExam from './pages/Main/Assessment/AssessmentExam';
import ExamWelcome from './pages/Main/Assessment/ExamWelcome';
import ExamDetails from './pages/Main/Assessment/ExamDetails';
import Quiz from './pages/Main/Assessment/Quiz';
import News from './pages/Main/News/News';
const About = lazy(() => import('./pages/About/About'))
const Home = lazy(() => import('./pages/Home/Home'))


function App() {
  const routes = createBrowserRouter([{
    path: '', element: <Layout></Layout>, children: [
      { index: true, element: <Suspense><Home></Home></Suspense> },
      { path: 'payment', element: <Payment></Payment> },
      { path: 'about', element: <Suspense><About></About></Suspense> },
      {
        path: 'main', element: <Main></Main>, children: [
          { path: 'leaderboard', element: <Leaderboard></Leaderboard> },
          { path: 'recommended', element: <RecommendedCourses></RecommendedCourses> },
          { path: 'recorded', element: <RecordedLessons></RecordedLessons> },
          { path: 'settings', element: <Settings></Settings> },
          { path: 'subjects', element: <Subjects></Subjects> },
          { path: 'subjects/*', element: <CourseDetails></CourseDetails> },
          { path: 'profile', element: <PersonalProfile></PersonalProfile> },
          { path: 'socialHome', element: <SocialHome></SocialHome> },
          { path: 'board', element: <LearningBoard></LearningBoard> },
          { path: 'Live', element: <LiveLessons></LiveLessons> },
          { path: 'payment', element: <MainPayment></MainPayment> },
          { path: 'payment2', element: <Payment></Payment> },
          { path: 'news', element: <News></News> },
          { path: 'assessment', element: <Assessment></Assessment> },
          {
            path: 'assessment/assessment-exam', element: <AssessmentExam></AssessmentExam>, children: [
              { path: '', element: <ExamWelcome></ExamWelcome> },
              { path: '0', element: <ExamDetails></ExamDetails> },
              { path: '*', element: <Quiz></Quiz> },
            ]
          },
          { path: 'profile/addProject', element: <AddProject></AddProject> },
          {
            path: 'blog', element: <Blog></Blog>, children: [
              { path: '*', element: <BlogFocus></BlogFocus> },
            ]
          },
          { path: 'blog/info/*', element: <BlogInfo></BlogInfo> },
          { path: 'friends', element: <Friends></Friends> },
          { path: 'messages', element: <Messages></Messages> },
          { path: 'messages/*', element: <Messages></Messages> },
          { path: 'competitions', element: <Competitions></Competitions> },
          { path: 'ECommerce', element: <ECommerce></ECommerce> },
          { path: 'competitions/exam', element: <Exam></Exam> },
        ]
      },
      { path: '*', element: <NotFound></NotFound> },
      { path: 'signup', element: <Signup></Signup> },
      { path: 'signin', element: <Signin></Signin> },
    ]
  }
  ])

  return (
    <div>
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
