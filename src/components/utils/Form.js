/* eslint-disable */
import React from "react";
import { Col, Row, Button, Input, Preloader, Icon } from "react-materialize";
import axios from "axios";
import checkboxes from "../utils/checkboxes";
import CheckBox from "../utils/CheckBox";

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      send: false,
      checkedItems: new Map()
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    const item = e.target.name;

    this.setState(prevState => ({
      checkedItems: prevState.checkedItems.set(item)
    }));
  }

  handleSubmit(e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;
    const checkbox = Array.from(this.state.checkedItems);

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
            checkbox: checkbox
          }
        },
        this.setState({ loading: true })
      ).then(response => {
        if (response.data === "success") {
          this.setState({ loading: false });

          window.Materialize.toast(
            "Mensagem Enviada, aguarde nosso contato!",
            5000
          );
        } else if (response.data === "fail") {
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

              <div>
                <Col s={12} m={10} l={10}>
                  {checkboxes.map(item => (
                    <div key={item.key}>
                      <CheckBox
                        name={item.name}
                        checked={this.state.checkedItems.get(item.name)}
                        onChange={this.handleChange}
                      />
                    </div>
                  ))}
                </Col>
              </div>
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

export default Form;
