import React from "react";
import { Col, Row, Button, Input, Preloader, Icon } from "react-materialize";
import Slogan from "../../components/utils/Slogan";
import axios from "axios";
import history from "../utils/History";
import ReactGA from "react-ga";

import emailContato from "../../img/Background/email-contato.jpg";

class ContactPage extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      send: false
    };
  }

  handleClick() {
    ReactGA.event({
      category: "Navigation",
      action: "Clicked Link"
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { id } = this.props.match.params;
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;
    console.log(id);

    if ((name && email && message && phone) !== "") {
      axios(
        {
          method: "POST",
          url:
            "https://us-central1-goomec-cdaf3.cloudfunctions.net/enviarEmail",
          data: {
            name: name,
            email: email,
            phone: phone,
            product: `${id}`,
            message: message
          }
        },
        this.setState({ loading: true })
      ).then(response => {
        console.log(response);

        if (response.data === "success") {
          this.setState({ loading: false });
          window.Materialize.toast(
            "Mensagem Enviada, aguarde nosso contato!",
            5000
          );
          setTimeout(() => {
            history.push("/");
          }, 3000);
        } else if (response.data === "fail") {
          alert("Message failed to send.");
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
    const { id } = this.props.match.params;
    ReactGA.pageview("/contato");
    return (
      <div className="josefin-font">
        <Col s={10} m={12}>
          <Slogan title={"GOOMEC"} image={emailContato} />
        </Col>
        <Row>
          <form
            id="contact-form"
            onSubmit={this.handleSubmit.bind(this)}
            method="POST"
          >
            <Col className="center-align" offset="s2 m4" s={8} m={4}>
              <h3>Contato</h3>
              {id ? <h4>Produto: {id}</h4> : ""}
            </Col>
            <Col offset="s1 m3">
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
              <Button
                onClick={() => {
                  this.handleClick();
                }}
                className="blue"
                large
                type="submit"
              >
                Enviar
              </Button>
            </Col>
          </form>
        </Row>
      </div>
    );
  }
}

export default ContactPage;
