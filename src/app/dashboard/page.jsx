
'use client';

import { useAuth } from '@/lib/useAuth';
import { useRouter } from 'next/navigation';
import About from '../../components/About/About'
import CoursesSection from '@/components/CoursesSection/CoursesSection '
import FAQ from '../../components/FAQ/FAQ'
import Hero from '../../components/Hero/Hero'
import StudentTestimonials from '../../components/StudentTestimonials/StudentTestimonials'
import Footer from "../../components/Footer/Footer";

export default function DashboardPage() {
  const { user, loading } = useAuth();
  const router = useRouter();

  if (loading) return <p className="text-center mt-10">جاري التحقق...</p>;

  if (!user) {
    router.push('/login'); 
    return null;
  }

  return (
    <div className="py-30:">
              <Hero/>
              <About/>
              <CoursesSection/>
              <StudentTestimonials/>
              <FAQ/>
              <Footer/>

    </div>
  );
}
