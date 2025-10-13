import { Helmet } from "react-helmet-async";

type HelmetTitleProps = {
  title?: string;
  description?: string;
};

const HelmetTitle = ({
  title = "TrustPay",
  description = "TrustPay is a digital wallet for payments",
}: HelmetTitleProps) => {
  return (
    <Helmet>
      <title>{title ? `${title} - TrustPay` : "TrustPay"}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
};

export default HelmetTitle;
