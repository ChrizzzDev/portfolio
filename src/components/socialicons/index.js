import React from "react";
import "./style.css";
import {
  FaGithub,
  FaDiscord,
  FaWhatsapp,
  FaInstagram,
  FaYoutube,
  FaTwitch,
} from "react-icons/fa";
import { socialprofils } from "../../content_option";

export const Socialicons = (params) => {
  return (
    <div className="stick_follow_icon">
      <ul>
        {socialprofils.github && (
          <li>
            <a href={socialprofils.github}>
              <FaGithub />
            </a>
          </li>
        )}
        {socialprofils.discord && (
          <li>
            <a href={socialprofils.discord}>
              <FaDiscord />
            </a>
          </li>
        )}
        {socialprofils.whatsapp && (
          <li>
            <a href={socialprofils.whatsapp}>
              <FaWhatsapp />
            </a>
          </li>
        )}
        {socialprofils.youtube && (
          <li>
            <a href={socialprofils.youtube}>
              <FaYoutube />
            </a>
          </li>
        )}
        {socialprofils.twitch && (
          <li>
            <a href={socialprofils.twitch}>
              <FaTwitch />
            </a>
          </li>
        )}
        {socialprofils.instagram && (
          <li>
            <a href={socialprofils.instagram}>
              <FaInstagram />
            </a>
          </li>
        )}
      </ul>
      <p>Sígueme</p>
    </div>
  );
};
