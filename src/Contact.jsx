import React from "react";
import styled from "styled-components";

const Contact = () => {
  const Wrapper = styled.section`
    padding: 9rem 0.5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;
  return (
    <>
      <Wrapper>
        <h2 className="common heading">Contact Page</h2>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14127.644417729527!2d85.29896509999999!3d27.720030849999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb18edc3c097f7%3A0x257203ef3defa67c!2sChamati%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v1703287599547!5m2!1sen!2snp"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

        <div className="container">
          <div className="contact-form">
            <form
              action="https://formspree.io/f/mdoqnjwa"
              method="post"
              className="contact-inputs"
            >
              <input
                type="text"
                placeholder="username"
                name="username"
                required
                autoComplete="off"
              />

              <input
                type="email"
                name="Email"
                placeholder="Email"
                autoComplete="off"
                required
              />

              <textarea
                placeholder="Enter your messsage"
                name="Message"
                id=""
                cols="30"
                rows="10"
                required
                autoComplete="off"
              ></textarea>

              <input type="submit" value="send" />
            </form>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default Contact;
