import React, { useEffect, useState } from "react";

function Whatsapp() {
  const [showPopup, setShowPopup] = useState(false);

  const phoneNumber = "962795873054"; // رقمك بدون +
  const message = "Hi Laith, can you help?";

  const openWhatsApp = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  const closePopup = () => {
    setShowPopup(false);
    localStorage.setItem("wa_popup_hidden_until", Date.now() + 3 * 60 * 1000); // يخفيه 3 دقائق
  };

  useEffect(() => {
    const hiddenUntil = localStorage.getItem("wa_popup_hidden_until");
    if (!hiddenUntil || Date.now() > hiddenUntil) {
      const timer = setTimeout(() => {
        setShowPopup(true);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <>
      {/* زر واتساب */}
      <div id="back-top" onClick={openWhatsApp}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
          width="35"
          height="35"
        />
      </div>

      {/* البوب أب */}
      {showPopup && (
        <div className="whatsapp-popup" id="whatsappPopup">
          <button className="close-btn" onClick={closePopup}>
            ×
          </button>
          <p>💬 Message me on WhatsApp now</p>
          <button className="chat-btn" onClick={openWhatsApp}>
            Start the conversation
          </button>
        </div>
      )}

      {/* CSS داخل الكومبوننت */}
      <style>{`
        #back-top {
          position: fixed;
          bottom: 20px;
          right: 20px;
          width: 60px;
          height: 60px;
          background-color: #25D366;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 10px rgba(0,0,0,0.2);
          cursor: pointer;
          z-index: 9999;
          transition: transform 0.3s ease;
        }
        #back-top:hover {
          transform: scale(1.1);
        }
        #back-top img {
          width: 35px;
          height: 35px;
        }

        .whatsapp-popup {
          position: fixed;
          bottom: 95px;
          right: 20px;
          background: #fff;
          color: #1f2937;
          border-radius: 14px;
          box-shadow: 0 12px 30px rgba(0,0,0,.12);
          padding: 14px 18px 16px;
          z-index: 9998;
          display: flex;
          flex-direction: column;
          gap: 10px;
          border: 1px solid #eef2f7;
          font-family: system-ui, -apple-system, "Segoe UI", Roboto, Arial;
          animation: fadeIn 0.3s ease-out;
        }
        .whatsapp-popup p {
          font-size: 14px;
          margin: 0;
        }
        .whatsapp-popup .chat-btn {
          background: #25D366;
          color: #fff;
          border: none;
          padding: 10px;
          border-radius: 10px;
          cursor: pointer;
          font-size: 14px;
        }
        .whatsapp-popup .close-btn {
          position: absolute;
          top: 6px;
          left: 10px;
          background: none;
          border: none;
          font-size: 20px;
          cursor: pointer;
          color: #999;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 768px) {
          .whatsapp-popup {
            bottom: 60px;
            right: 10px;
          }
          #back-top {
            bottom: 15px;
            right: 15px;
            width: 55px;
            height: 55px;
          }
        }



@media only screen and (max-width: 768px) {
  .whatsapp-popup {
    position: fixed;
    bottom: 115px !important;
  }
}



@media only screen and (max-width: 768px) {
 #back-top {
  
    bottom: 50px !important;
  }
}




.whatsapp-popup .close-btn {
    position: absolute;
    top: 2px !important;
    left: 238px !important;
    color: green;
}



button.close-btn:hover {
    box-shadow: unset !important;
}
      `}</style>
    </>
  );
}

export default Whatsapp;
