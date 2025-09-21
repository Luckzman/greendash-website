"use client";

import CompliantAssessmentForm from "../../components/CompliantAssessmentForm";
import Hero from "@/components/common/Hero";
import Layout from "@/components/layout/Index";
import useScrollToElement from "@/hooks/useScrollToElement";

export default function QuizPage() {
  useScrollToElement('quiz');

  return (
    <Layout>
      <Hero />
      <div id="quiz">
        <CompliantAssessmentForm />
      </div>
    </Layout>
  );
}
