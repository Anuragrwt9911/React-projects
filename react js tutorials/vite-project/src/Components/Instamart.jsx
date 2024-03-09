import { useState } from "react";
import "../main.css";

const Section = ({ title, description, isVisible, setIsVisible }) => {
  //child componenet
  // const [isVisible, setIsVisible] = useState(false);//power is gone and transfered to parent

  return (
    <div className="border border-black my-20">
      <h3 className="font-bold text-2xl p-2">{title}</h3>

      {isVisible ? (
        <button onClick={() => setIsVisible(false)}>Hide</button>
      ) : (
        <button onClick={() => setIsVisible(true)}>show</button>
      )}

      {isVisible && (
        <p className="bg-blue-600 text-white p-2 rounded-md ">{description}</p>
      )}
    </div>
  );
};

const Instamart = () => {
  //parent componenet
  const [isVisibleSection, setIsVisibleSection] = useState("team");
  return (
    <div>
      <h1 className="font-bold">Instamart</h1>
      <Section
        title={"About Instamart"}
        description={
          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
        }
        isVisible={isVisibleSection === "about"}
        setIsVisible={() => {
          setIsVisibleSection("about");
        }}
      />

      <Section
        title={"Team Instamart"}
        description={
          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
        }
        isVisible={isVisibleSection === "team"}
        setIsVisible={() => {
          setIsVisibleSection("team");
        }}
      />
      <Section
        title={"Team Instamart"}
        description={
          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
        }
        isVisible={isVisibleSection === "careers"}
        setIsVisible={() => {
          setIsVisibleSection("careers");
        }}
      />
    </div>
  );
};

export default Instamart;
