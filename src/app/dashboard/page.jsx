
'use client';

import { useAuth } from '@/lib/useAuth';
import { useRouter } from 'next/navigation';
import About from '@/Components/About/About'
import CoursesSection from '@/Components/CoursesSection/CoursesSection '
import FAQ from '@/Components/FAQ/FAQ'
import Hero from '@/Components/Hero/Hero'
import StudentTestimonials from '@/Components/StudentTestimonials/StudentTestimonials'
import Footer from "@/Components/Footer/Footer";

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
