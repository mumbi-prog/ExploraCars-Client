"use client";
import React from "react";
import { Card, CardBody } from "@nextui-org/react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { SiTrustpilot } from "react-icons/si";
export default function Recomendations() {
  return (
    <>
      <h1 className="lg:text-4xl text-3xl font-bold text-center xsm:text-xl my-2">
        Customer Recommended
      </h1>
      <div className="flex items-center justify-center flex-col md:flex-row gap-auto mx-2">
        <div className="p-2 flex-1 items-center justify-center">
          <p className="text-xl break words">
            We highly value reviews about Explora.com left by our customers.
            They help us make our service even better.
          </p>
        </div>
        <div className="flex gap-5 xsm:gap-2 ">
          <Card className="recommendations-card ">
            <CardBody className="m-auto">
              <p className="cardheader">4.9</p>
              <p className="flex justify-start items-center gap-1">
                {" "}
                <SiTrustpilot />
                Trustpilot
              </p>
            </CardBody>
          </Card>
          <Card className="recommendations-card ">
            <CardBody className="m-auto">
              <p className="cardheader">4.8</p>
              <p className="flex justify-start items-center gap-1">
                <FcGoogle />
                Google
              </p>
            </CardBody>
          </Card>
          <Card className="recommendations-card ">
            <CardBody className="m-auto">
              <p className="cardheader">4.9</p>
              <p className="flex justify-start items-center gap-1">
                {" "}
                <FaFacebookF />
                Facebook
              </p>
            </CardBody>
          </Card>
        </div>
      </div>
    </>
  );
}
