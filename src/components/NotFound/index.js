import {
  NotFoundContainer,
  NotFoundImage,
  NotFoundHeading,
  NotFoundParagraph,
} from "./styledComponents";

const text = "we're sorry, the page you requested could not be found";
const NotFound = () => (
  <NotFoundContainer>
    <NotFoundImage
      src="https://assets.ccbp.in/frontend/react-js/jobby-app-not-found-img.png"
      alt="not found"
    />
    <NotFoundHeading>Page Not Found</NotFoundHeading>
    <NotFoundParagraph>{text}</NotFoundParagraph>
  </NotFoundContainer>
);

export default NotFound;
