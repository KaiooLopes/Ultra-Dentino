import { useState } from "react";
import {
  HelpAndSupportContainer,
  Attendance,
  Title,
  SendFeedback,
  Select,
  OptionSelected,
  DivOptions,
  Inputs,
  TextareaMessage,
  DivSubmit,
  Error,
} from "./styles";

const HelpAndSupport = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [msg, setMsg] = useState("");

  const [clicked1, setClicked1] = useState(false);
  const [select1, setSelect1] = useState(null);
  const [clicked2, setClicked2] = useState(false);
  const [select2, setSelect2] = useState(null);

  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !email ||
      !name ||
      !msg ||
      !select1 ||
      (select1 !== "Obter um Reembolso" && !select2)
    ) {
      setError(true);
      return;
    } /* 

    const templateParamns = {
      from_name: name,
      from_email: email,
      from_message: msg,
      from_select1: select1,
      from_select2: select2,
    }; */
    setError(false);
    try {
      /*       await emailjs.send(
        "service_5ctho19",
        "template_vxsefv5",
        templateParamns,
        "2lDKer35MXvDM1B7p"
      ); */
      alert("Email enviado com sucesso.");
    } catch (error) {
      console.log(error);
      alert("Algo deu errado, por favor, tente novamente mais tarde.");
    }
  };

  return (
    <HelpAndSupportContainer>
      <Title>
        <h1>
          If you haven't found the answer you need above, our customer support
          agents are more than happy to personally assist you, as follows:
        </h1>
      </Title>
      <Attendance>
        <p>For Order Support, please contact ClickBank HERE.</p>
        <p>
          For product support contact the vendor anytime using the contact form
          below or call us at +1 (302) 754-3446 from Monday to Sunday 10 AM - 1
          AM EST.
        </p>
      </Attendance>
      <SendFeedback>
        <h2>Help & Support</h2>
        <form
          onSubmit={handleSubmit}
          method="POST"
          action="https://api.staticforms.xyz/submit"
        >
          <input
            type="hidden"
            name="accessKey"
            value="b3f53f20-ba77-4bee-99c2-8001359c3771"
          ></input>
          <Inputs>
            <i className="fa-regular fa-envelope"></i>
            <input
              type="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              placeholder="My Email Address is..."
              required
            />
          </Inputs>
          <Inputs>
            <i className="fa-solid fa-question"></i>
            <input
              type="text"
              name="subject"
              onChange={(e) => setName(e.target.value)}
              value={name}
              placeholder="Subject"
              required
            />
          </Inputs>
          <TextareaMessage>
            <textarea
              value={msg}
              name="message"
              onChange={(e) => setMsg(e.target.value)}
              required
            />
          </TextareaMessage>
          <DivOptions clicked={clicked1}>
            <p>Estou te escrevendo para...</p>
            <Select clicked={clicked1}>
              <OptionSelected
                onClick={() => {
                  setClicked1(!clicked1);
                  setClicked2(false);
                }}
              >
                <p>
                  {!select1 && "..."}
                  {select1 && select1}
                </p>
                {!clicked1 && <i className="fa-solid fa-caret-up"></i>}
                {clicked1 && <i className="fa-solid fa-caret-down"></i>}
              </OptionSelected>
              {clicked1 && (
                <div>
                  <div
                    onClick={(e) => {
                      if (e.target.querySelector("p")) {
                        setSelect1(e.target.querySelector("p").innerHTML);
                      } else {
                        setSelect1(e.target.innerHTML);
                      }
                      setClicked1(false);
                      setSelect2(null);
                    }}
                  >
                    <p>Fazer uma Pergunta</p>
                  </div>
                  <div
                    onClick={(e) => {
                      if (e.target.querySelector("p")) {
                        setSelect1(e.target.querySelector("p").innerHTML);
                      } else {
                        setSelect1(e.target.innerHTML);
                      }
                      setClicked1(false);
                      setSelect2(null);
                    }}
                  >
                    <p>Obter um Reembolso</p>
                  </div>
                  <div
                    onClick={(e) => {
                      if (e.target.querySelector("p")) {
                        setSelect1(e.target.querySelector("p").innerHTML);
                      } else {
                        setSelect1(e.target.innerHTML);
                      }
                      setClicked1(false);
                      setSelect2(null);
                    }}
                  >
                    <p>Fazer uma Reclamação</p>
                  </div>
                </div>
              )}
            </Select>
          </DivOptions>
          {select1 === "Fazer uma Pergunta" && (
            <DivOptions>
              <p>Minha pergunta é sobre...</p>
              <Select clicked={clicked2} clicked2={true}>
                <OptionSelected
                  onClick={() => {
                    setClicked2(!clicked2);
                    setClicked1(false);
                  }}
                >
                  <p>
                    {!select2 && "..."}
                    {select2 && select2}
                  </p>
                  {!clicked2 && <i className="fa-solid fa-caret-up"></i>}
                  {clicked2 && <i className="fa-solid fa-caret-down"></i>}
                </OptionSelected>
                {clicked2 && (
                  <div>
                    <div
                      onClick={(e) => {
                        if (e.target.querySelector("p")) {
                          setSelect2(e.target.querySelector("p").innerHTML);
                        } else {
                          setSelect2(e.target.innerHTML);
                        }
                        setClicked2(false);
                      }}
                    >
                      <p>Onde está meu pedido</p>
                    </div>
                    <div
                      onClick={(e) => {
                        if (e.target.querySelector("p")) {
                          setSelect2(e.target.querySelector("p").innerHTML);
                        } else {
                          setSelect2(e.target.innerHTML);
                        }
                        setClicked2(false);
                      }}
                    >
                      <p>Atraso de envio</p>
                    </div>
                    <div
                      onClick={(e) => {
                        if (e.target.querySelector("p")) {
                          setSelect2(e.target.querySelector("p").innerHTML);
                        } else {
                          setSelect2(e.target.innerHTML);
                        }
                        setClicked2(false);
                      }}
                    >
                      <p>Encomendar o produto</p>
                    </div>
                    <div
                      onClick={(e) => {
                        if (e.target.querySelector("p")) {
                          setSelect2(e.target.querySelector("p").innerHTML);
                        } else {
                          setSelect2(e.target.innerHTML);
                        }
                        setClicked2(false);
                      }}
                    >
                      <p>Devolvendo o produto</p>
                    </div>
                    <div
                      onClick={(e) => {
                        if (e.target.querySelector("p")) {
                          setSelect2(e.target.querySelector("p").innerHTML);
                        } else {
                          setSelect2(e.target.innerHTML);
                        }
                        setClicked2(false);
                      }}
                    >
                      <p>Obter um reembolso</p>
                    </div>
                    <div
                      onClick={(e) => {
                        if (e.target.querySelector("p")) {
                          setSelect2(e.target.querySelector("p").innerHTML);
                        } else {
                          setSelect2(e.target.innerHTML);
                        }
                        setClicked2(false);
                      }}
                    >
                      <p>Disponibilidade de produtos</p>
                    </div>
                    <div
                      onClick={(e) => {
                        if (e.target.querySelector("p")) {
                          setSelect2(e.target.querySelector("p").innerHTML);
                        } else {
                          setSelect2(e.target.innerHTML);
                        }
                        setClicked2(false);
                      }}
                    >
                      <p>Pergunta técnica</p>
                    </div>
                  </div>
                )}
              </Select>
            </DivOptions>
          )}
          {select1 === "Fazer uma Reclamação" && (
            <DivOptions>
              <p>Minha reclamação é sobre...</p>
              <Select clicked={clicked2} clicked2={true}>
                <OptionSelected
                  onClick={() => {
                    setClicked2(!clicked2);
                    setClicked1(false);
                  }}
                >
                  <p>
                    {!select2 && "..."}
                    {select2 && select2}
                  </p>
                  {!clicked2 && <i className="fa-solid fa-caret-up"></i>}
                  {clicked2 && <i className="fa-solid fa-caret-down"></i>}
                </OptionSelected>
                {clicked2 && (
                  <div>
                    <div
                      onClick={(e) => {
                        if (e.target.querySelector("p")) {
                          setSelect2(e.target.querySelector("p").innerHTML);
                        } else {
                          setSelect2(e.target.innerHTML);
                        }
                        setClicked2(false);
                      }}
                    >
                      <p>O site</p>
                    </div>
                    <div
                      onClick={(e) => {
                        if (e.target.querySelector("p")) {
                          setSelect2(e.target.querySelector("p").innerHTML);
                        } else {
                          setSelect2(e.target.innerHTML);
                        }
                        setClicked2(false);
                      }}
                    >
                      <p>Preço do Produto</p>
                    </div>
                    <div
                      onClick={(e) => {
                        if (e.target.querySelector("p")) {
                          setSelect2(e.target.querySelector("p").innerHTML);
                        } else {
                          setSelect2(e.target.innerHTML);
                        }
                        setClicked2(false);
                      }}
                    >
                      <p>Envio do produto</p>
                    </div>
                    <div
                      onClick={(e) => {
                        if (e.target.querySelector("p")) {
                          setSelect2(e.target.querySelector("p").innerHTML);
                        } else {
                          setSelect2(e.target.innerHTML);
                        }
                        setClicked2(false);
                      }}
                    >
                      <p>Produto em Si</p>
                    </div>
                    <div
                      onClick={(e) => {
                        if (e.target.querySelector("p")) {
                          setSelect2(e.target.querySelector("p").innerHTML);
                        } else {
                          setSelect2(e.target.innerHTML);
                        }
                        setClicked2(false);
                      }}
                    >
                      <p>Serviço Oferecido</p>
                    </div>
                    <div
                      onClick={(e) => {
                        if (e.target.querySelector("p")) {
                          setSelect2(e.target.querySelector("p").innerHTML);
                        } else {
                          setSelect2(e.target.innerHTML);
                        }
                        setClicked2(false);
                      }}
                    >
                      <p>Suporte ao Cliente</p>
                    </div>
                    <div
                      onClick={(e) => {
                        if (e.target.querySelector("p")) {
                          setSelect2(e.target.querySelector("p").innerHTML);
                        } else {
                          setSelect2(e.target.innerHTML);
                        }
                        setClicked2(false);
                      }}
                    >
                      <p></p>
                    </div>
                  </div>
                )}
              </Select>
            </DivOptions>
          )}
          <DivOptions>
            <p>Produto</p>
            <Select disabled={true}>
              <OptionSelected>
                <p>UltraDentino</p>
                <i className="fa-solid fa-caret-up"></i>
              </OptionSelected>
            </Select>
          </DivOptions>
          <DivSubmit>
            <button>Send Feedback</button>
            <Error error={error}>
              <p>Por favor, Preencha todos os campos</p>
              <div onClick={() => setError(false)}>X</div>
            </Error>
          </DivSubmit>
        </form>
      </SendFeedback>
    </HelpAndSupportContainer>
  );
};

export default HelpAndSupport;
