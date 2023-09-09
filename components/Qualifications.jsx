"use client";
import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
export default function Qualifications() {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
  return (
    <div className="mx-2 p-2 ">
      <h1 className="lg:text-4xl text-3xl font-bold text-center xsm:text-xl my-2">Rental Terms, Qualifications and Requirements</h1>
      <Accordion variant="shadow">
        <AccordionItem
          key="1"
          aria-label="Driver requirements"
          title="👤 Driver requirements"className="accordion">
          <ol className="requirements-list mx-2 list-decimal">
            <li>Minimum rental age is 18 years.</li>
            <li>Maximum rental age is 65 years.</li>
            <li>
              The driver license must have been issued by authorized authorities
              at least 1 year(s) before the date of the commencement of the
              rental.
            </li>
            <li>
              The driver license must be written in English alphabet. Otherwise,
              the renter must provide an International Driver Permit (IDP).
            </li>
            <li>
              A driver license printed using a non-Roman alphabet (Arabic,
              Japanese, Cyrillic, etc) must be supplemented by an International
              Driving Permit.
            </li>
            <li>
              Please note that the International Driving Permit is valid only if
              accompanied by the regular driver license.
            </li>
            <li>
              Only physical driving licenses are accepted (not digital
              versions).
            </li>
            <li>
              In order to pick up the car, the renter and each additional driver
              must present the following documents: passport or national id, valid driver license and credit card
            </li>
          </ol>
        </AccordionItem>
        <AccordionItem key="2" aria-label="🛡️Protection" title="Accordion 2">
          
        </AccordionItem>
        <AccordionItem key="3" aria-label="🛡️Protection" title="🛡️Protection"className="accordion">
          <ul className="requirements-list mx-2">
            <li>✔️ Collision Damage waiver
              <ul>
                <li className="text-xs font-thin">You will have to pay at most the deductible if the cars bodywork is damaged (other parts of the car are not covered).</li>
                </ul> 
                </li>
          </ul>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
