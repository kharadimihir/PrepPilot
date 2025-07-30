import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import QuizPage from '../_components/quizpage'

const MockInterviewPage = () => {
  return (
    <div className='container mx-auto space-y-8'>
      <div className='flex flex-col space-y-2 mx-2'>
        <Link href={"/interview"}>
          <Button className="gap-2 -ml-2 cursor-pointer"  variant="link">
            <ArrowLeft className='h-4 w-4' />
            Back to Interview Preparation
          </Button>
        </Link>

        <div>
          <h1 className='text-6xl font-bold gradient-title'>Mock Interview</h1>
          <p className='text-muted-foreground'>Test your knowledge with industry-specific questions</p>
        </div>
      </div>

      <QuizPage />
    </div>
  )
}

export default MockInterviewPage
