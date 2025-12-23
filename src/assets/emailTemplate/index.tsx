import { Button, Html } from "@react-email/components";
import {
  EmailStep,
  EmailTemplateImg,
  FacebookIcon,
  InstagramIcon,
  Logo,
  TwitterIcon,
} from "..";

interface EmailTemplateProps {
  fullName?: string;
}

const EmailTemplate = ({ fullName }: EmailTemplateProps) => {
  return (
    <Html lang="en">
      <div
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <div
          style={{
            backgroundColor: "#FF005A",
            padding: "40px 24px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <img src={Logo.src} alt="Logo" />

          <div
            style={{
              display: "flex",
              gap: "24px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src={FacebookIcon.src} alt="Facebook" />
            <img src={TwitterIcon.src} alt="Twitter" />
            <img src={InstagramIcon.src} alt="Instagram" />
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "21px",
            marginBottom: "16px",
          }}
        >
          <img src={EmailTemplateImg.src} alt="Email Template" />
        </div>

        <div>
          <h4
            style={{
              fontWeight: 700,
              fontSize: "24px",
              color: "#384860",
              textAlign: "center",
            }}
          >
            Your eSIM is Ready! Activate in 3 Simple Steps 🚀
          </h4>

          <p
            style={{
              fontSize: "16px",
              fontWeight: 400,
              color: "#384860",
              marginTop: "8px",
            }}
          >
            Hello {fullName},
          </p>
          <p style={{ fontSize: "16px", fontWeight: 400, color: "#384860" }}>
            Welcome to hassle-free connectivity! Your eSIM is ready to be
            activated. Follow these simple steps to get started
          </p>

          <div
            style={{
              backgroundColor: "#F8F8F8",
              borderRadius: "12px",
              padding: "24px",
              marginTop: "16px",
              marginBottom: "16px",
            }}
          >
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "32px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img src={EmailStep.src} alt="Email Step" />
                <p
                  style={{
                    fontSize: "14px",
                    fontWeight: 400,
                    color: "#090A2C",
                  }}
                >
                  Step 1
                </p>
                <p
                  style={{
                    fontSize: "14px",
                    fontWeight: 500,
                    color: "#090A2C",
                  }}
                >
                  Scan Your QR Code
                </p>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img src={EmailStep.src} alt="Email Step" />
                <p
                  style={{
                    fontSize: "14px",
                    fontWeight: 400,
                    color: "#090A2C",
                  }}
                >
                  Step 2
                </p>
                <p
                  style={{
                    fontSize: "14px",
                    fontWeight: 500,
                    color: "#090A2C",
                  }}
                >
                  Follow Instructions
                </p>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img src={EmailStep.src} alt="Email Step" />
                <p
                  style={{
                    fontSize: "14px",
                    fontWeight: 400,
                    color: "#090A2C",
                  }}
                >
                  Step 3
                </p>
                <p
                  style={{
                    fontSize: "14px",
                    fontWeight: 500,
                    color: "#090A2C",
                  }}
                >
                  You’re Connected! 🎉
                </p>
              </div>
            </div>

            <Button
              style={{
                width: "100%",
                backgroundColor: "#FF005A",
                color: "#FFF",
                fontSize: "16px",
                fontWeight: 500,
                borderRadius: 999,
                marginTop: "24px",
                padding: "14px",
              }}
            >
              View all destinations
            </Button>
          </div>

          <p style={{ fontSize: "16px", fontWeight: 400, color: "#384860" }}>
            💡 Need Help?
            <br />
            If you run into any issues, check out our [Help Center] or contact
            our support team.
            <br />
            Happy surfing!
            <br />
            Roamio team
          </p>
        </div>
      </div>
    </Html>
  );
};

export default EmailTemplate;
