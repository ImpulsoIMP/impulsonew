import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(true);
  const { toast } = useToast();

  const handleAccept = () => {
    toast({
      title: "Cookies aceptadas",
      description: "Gracias por aceptar nuestras cookies",
    });
    setIsVisible(false);
  };

  const handleReject = () => {
    toast({
      title: "Cookies rechazadas",
      description: "Has rechazado nuestras cookies",
    });
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-navy/95 backdrop-blur-sm p-4 shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-bluegray text-sm">
            Utilizamos cookies para mejorar tu experiencia. Al continuar navegando,
            aceptas nuestra política de cookies.
          </p>
          <div className="flex gap-4">
            <Button
              variant="default"
              className="bg-royal hover:bg-royal/80"
              onClick={handleAccept}
            >
              Aceptar
            </Button>
            <Button variant="outline" onClick={handleReject}>
              Rechazar
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;