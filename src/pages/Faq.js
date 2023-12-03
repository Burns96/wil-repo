import React from 'react'
import {
  UncontrolledAccordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem, Card, CardBody
} from 'reactstrap';

function Faq() {
  return (
    <div>
      <Card className='card-faq'>
        <CardBody className='card-body-faq'>
          <UncontrolledAccordion defaultOpen="1">
            <AccordionItem>
              <AccordionHeader targetId="1">
                FAQ 1
              </AccordionHeader>
              <AccordionBody accordionId="1">
                  FAQ 1 Answer will go here
              </AccordionBody>
            </AccordionItem>
            <AccordionItem>
              <AccordionHeader targetId="2">
                FAQ 2
              </AccordionHeader>
              <AccordionBody accordionId="2">
                FAQ 2 answer will go here
              </AccordionBody>
            </AccordionItem>
            <AccordionItem>
              <AccordionHeader targetId="3">
                FAQ 3
              </AccordionHeader>
              <AccordionBody accordionId="3">
                FAQ 3 answer will go here
              </AccordionBody>
            </AccordionItem>
            <AccordionItem>
              <AccordionHeader targetId="4">
                FAQ 4 
              </AccordionHeader>
              <AccordionBody accordionId="4">
                FAQ 4 answer will go here
              </AccordionBody>
            </AccordionItem>
            <AccordionItem>
              <AccordionHeader targetId="5">
                FAQ 5
              </AccordionHeader>
              <AccordionBody accordionId="5">
                FAQ 5 answer will be here
              </AccordionBody>
            </AccordionItem>
          </UncontrolledAccordion>
        </CardBody>
    </Card>
    </div>
  )
}

export default Faq