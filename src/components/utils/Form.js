import React from "react";
import { Col, Row, Button, Input, Preloader, Icon } from "react-materialize";
import axios from "axios";
import history from "../utils/History";
import PropTypes from "prop-types";

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      send: false
    };
  }
  handleSubmit(e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;
    const radio = document.getElementById("radio").value;

    if ((name && email && message && phone) !== "") {
      axios(
        {
          method: "POST",
          url:
            "https://us-central1-pwa-experiment-eb2bd.cloudfunctions.net/enviarEmail",
          data: {
            name: name,
            email: email,
            phone: phone,
            message: message,
            radio: radio
          }
        },
        this.setState({ loading: true })
      ).then(response => {
        if (response.data.msg === "success") {
          this.setState({ loading: false });
          window.Materialize.toast(
            "Mensagem Enviada, aguarde nosso contato!",
            5000
          );
          setTimeout(() => {
            history.push("/");
          }, 3000);
        } else if (response.data.msg === "fail") {
          alert("Erro ao enviar mensagem.");
        }
      });
    } else {
      window.Materialize.toast("Por favor, preencha os campos!", 3000);
    }
  }
  toast = () => {
    window.Materialize.toast("Enviando menssagem", 5000);
  };
  render() {
    return (
      <div className="josefin-font">
        <Row>
          <form
            id="contact-form"
            onSubmit={this.handleSubmit.bind(this)}
            method="POST"
          >
            <Col className="center-align" offset="s2 m4" s={8} m={4}>
              <h3>Contato</h3>
            </Col>
            <Col offset="s1 m2 l2">
              <Input
                autoComplete="off"
                id="name"
                label="Nome Completo"
                s={11}
                m={10}
                validate
              >
                <Icon>account_circle</Icon>
              </Input>
              <Input
                autoComplete="off"
                id="phone"
                s={11}
                m={10}
                label="Telefone"
                type="tel"
                validate
              >
                <Icon>phone</Icon>
              </Input>
              <Input
                autoComplete="off"
                id="email"
                type="email"
                label="Email"
                s={11}
                m={10}
                validate
              >
                <Icon>email</Icon>
              </Input>
              <Input
                autoComplete="off"
                id="message"
                label="Mensagem"
                type="textarea"
                data-length="120"
                s={11}
                m={10}
                validate
              >
                <Icon>message</Icon>
              </Input>
              {this.props.orcamento === "orcamento" ? (
                <div>
                  <Col s={10} m={10} l={10}>
                    <Input
                      s={2}
                      m={3}
                      l={3}
                      id="radio"
                      name="group1"
                      type="radio"
                      value="Alinhadores"
                      label="Alinhadores"
                    />
                    <Input
                      s={2}
                      m={3}
                      l={3}
                      id="radio"
                      name="group1"
                      type="radio"
                      value="Rampas"
                      label="Rampas"
                    />
                    <Input
                      s={2}
                      m={3}
                      l={3}
                      id="radio"
                      name="group1"
                      type="radio"
                      value="Base de Alinhamento"
                      label="Base de Alinhamento"
                    />
                    <Input
                      s={2}
                      m={3}
                      l={3}
                      id="radio"
                      name="group1"
                      type="radio"
                      value="Elevadores"
                      label="Elevadores"
                    />
                    <Input
                      s={2}
                      m={3}
                      l={3}
                      id="radio"
                      name="group1"
                      type="radio"
                      value="Balanceadoras"
                      label="Balanceadoras"
                    />
                    <Input
                      s={2}
                      m={3}
                      l={3}
                      id="radio"
                      name="group1"
                      type="radio"
                      value="Desmontadoras"
                      label="Desmonstadoras"
                    />
                    <Input
                      s={2}
                      m={3}
                      l={3}
                      id="radio"
                      name="group1"
                      type="radio"
                      value="Acessórios"
                      label="Acessórios"
                    />
                    <Input
                      s={2}
                      m={3}
                      l={3}
                      id="radio"
                      name="group1"
                      type="radio"
                      value="Linha Pesada"
                      label="Linha Pesada"
                    />
                  </Col>
                </div>
              ) : (
                ""
              )}
            </Col>
            {this.state.loading ? (
              <Col
                className="center-align"
                style={{ marginBottom: "1em" }}
                s={12}
                m={12}
              >
                <Preloader size="big" />
              </Col>
            ) : (
              ""
            )}
            <Col className="center-align" s={12} m={12}>
              <br />
              <br />
              <br />{" "}
              <Button className="blue" large type="submit">
                Enviar
              </Button>
            </Col>
          </form>
        </Row>
      </div>
    );
  }
}
Form.propTypes = {
  orcamento: PropTypes.string
};

export default Form;
