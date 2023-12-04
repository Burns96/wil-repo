import React, { useState, useEffect } from 'react';
import { translateText } from '../components/Translate.js'; 
import {
  UncontrolledAccordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem, Card, CardBody
} from 'reactstrap';

const Faq = ({ language }) => {
  const [translatedFAQs, setTranslatedFAQs] = useState([]);

  useEffect(() => {
    const translateFAQs = async () => {
      const questionsAnswers = [
        { question: "FAQ 1", answer: "FAQ 1 Answer will go here" },
        { question: "FAQ 2", answer: "FAQ 2 answer will go here" },
        { question: "FAQ 3", answer: "FAQ 3 answer will go here" },
        { question: "FAQ 4", answer: "FAQ 4 answer will go here" },
        { question: "FAQ 5", answer: "FAQ 5 answer will be here" },
        
      ];

      const translations = await Promise.all(questionsAnswers.map(async qa => {
        const translatedQuestion = await translateText(qa.question, language);
        const translatedAnswer = await translateText(qa.answer, language);
        return { question: translatedQuestion, answer: translatedAnswer };
      }));

      setTranslatedFAQs(translations);
    };

    translateFAQs();
  }, [language]);

  return (
    <div>
      <Card className='card-faq'>
        <CardBody className='card-body-faq'>
          <UncontrolledAccordion defaultOpen="1">

            {translatedFAQs.map((faq, index) => (
              <AccordionItem key={index}>
                <AccordionHeader targetId={String(index)}>
                  {faq.question}
                </AccordionHeader>
                <AccordionBody accordionId={String(index)}>
                  {faq.answer}
                </AccordionBody>
              </AccordionItem>
            ))}

          </UncontrolledAccordion>
        </CardBody>
      </Card>
    </div>
  );
}

export default Faq;
