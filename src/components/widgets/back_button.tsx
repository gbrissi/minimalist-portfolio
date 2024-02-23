import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function BackButton() {
  const navigate = useNavigate();

  return (
    <Button
      variant="ghost"
      className="rounded-full w-16 h-16"
      onClick={() => navigate(-1)}
    >
      <FontAwesomeIcon
        icon={faArrowLeft}
        size="xl"
        className="opacity-80 hover:opacity-100"
      />
    </Button>
  );
}
