import { Button, Html } from "@react-email/components";

interface EmailTemplateProps {
  fullName?: string;
  baseUrl?: string;
}

const normalizeBaseUrl = (url?: string) => {
  if (!url) return "";
  return url.endsWith("/") ? url.slice(0, -1) : url;
};

const fallbackBaseUrl = normalizeBaseUrl(
  process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.NEXT_PUBLIC_APP_URL ||
    process.env.NEXT_PUBLIC_BASE_URL ||
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : undefined),
);

const EmailTemplate = ({ fullName, baseUrl }: EmailTemplateProps) => {
  const resolvedBaseUrl = normalizeBaseUrl(baseUrl) || fallbackBaseUrl;
  const assetUrl = (path: string) =>
    resolvedBaseUrl ? `${resolvedBaseUrl}${path}` : path;

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
          <img
            src={assetUrl("/logo.png")}
            alt="Logo"
          />

          <div
            style={{
              display: "flex",
              gap: "24px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={assetUrl("/Social icon - FB.png")}
              alt="Facebook"
            />
            <img
              src={assetUrl("/Social icon - Twitter.png")}
              alt="Twitter"
            />
            <img
              src={assetUrl("/Social icon - IG.png")}
              alt="Instagram"
            />
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
          <img
            src={assetUrl("/email-template.png")}
            alt="Email Template"
          />
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
                <img
                  src={assetUrl("/email-step.png")}
                  alt="Email Step"
                />
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
                <img src={assetUrl("/email-step.png")} alt="Email Step" />
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
                <img src={assetUrl("/email-step.png")} alt="Email Step" />
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
