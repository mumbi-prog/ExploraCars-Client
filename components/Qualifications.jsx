"use client";
import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
export default function Qualifications() {
  return (
    <div className="p-2 ">
      <h1 className="lg:text-4xl text-3xl font-bold text-center xsm:text-xl my-2">
        Rental Terms, Qualifications and Requirements
      </h1>
      <Accordion
        variant="splitted"
        showDivider={true}
        className="py-2"
        motionProps={{
          variants: {
            enter: {
              y: 0,
              opacity: 1,
              height: "auto",
              transition: {
                height: {
                  type: "spring",
                  stiffness: 500,
                  damping: 30,
                  duration: 1,
                },
                opacity: {
                  easings: "ease",
                  duration: 1,
                },
              },
            },
            exit: {
              y: -10,
              opacity: 0,
              height: 0,
              transition: {
                height: {
                  easings: "ease",
                  duration: 0.25,
                },
                opacity: {
                  easings: "ease",
                  duration: 0.3,
                },
              },
            },
          },
        }}>
        <AccordionItem
          key="1"
          aria-label="Driver requirements"
          title="👤 Driver requirements"
          className="accordion text-left">
          <ol className="requirements-list mx-2">
            <li>Minimum rental age is 18 years and the Maximum is 65.</li>
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
              must present the following documents: passport or national id,
              valid driver license and credit card
            </li>
          </ol>
        </AccordionItem>
        <AccordionItem
          key="2"
          aria-label="💳 Payment Policy"
          title="💳 Payment Policy"
          className="accordion"></AccordionItem>
        <AccordionItem
          key="3"
          aria-label="🛡️Protection"
          title="🛡️Protection"
          className="accordion">
          <ul className="requirements-list mx-2">
            <li>
              ✔️ Collision Damage waiver
              <ul>
                <li className="text-xs font-thin">
                  You will have to pay at most the deductible if the cars
                  bodywork is damaged (other parts of the car are not covered).
                </li>
              </ul>
            </li>
          </ul>
        </AccordionItem>
        <AccordionItem
          key="4"
          aria-label="📄 Rental Conditions "
          title="📄 Rental Conditions"
          className="accordion">
          <ul className="requirements-list mx-2">
            <li>
              ✔️ Rate Includes
              <ul>
                <li className="text-xs font-thin">
                  Free cancellation with a full refund up to 48 hours before
                  your pick-up time, Unlimited mileage, Collision Damage Waiver,
                  Roadside Assistance (in the country of pick-up), Third Party
                  Liability and VAT (value added tax).
                </li>
              </ul>
            </li>
          </ul>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
