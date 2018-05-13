import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaRedditAlien,
  FaLinkedin,
  FaMedium,
  FaPinterest,
  FaTwitter,
  FaSoundcloud,
  FaBitcoin,
  FaSpotify,
  FaAngellist
} from "react-icons/lib/fa";
// https://gorangajic.github.io/react-icons/fa.html

const SocialLinks = () => (
  <ul className="social">
  <li>
      <a href="https://www.linkedin.com/in/genesmith1" target="_blank">
        <FaLinkedin />
      </a>
  </li>
  <li>
      <a href="https://angel.co/gene-smith?public_profile=1" target="_blank">
        <FaAngellist />
      </a>
  </li>
  <li>
      <a href="https://www.facebook.com/gene.r.smith" target="_blank">
        <FaFacebook />
      </a>
    </li>
    <li>
      <a href="https://github.com/gene-smith" target="_blank">
        <FaGithub />
      </a>
    </li>
    <li>
      <a href="https://www.reddit.com/user/gene-smith/" target="_blank">
        <FaRedditAlien />
      </a>
    </li>
    <li>
      <a href="https://twitter.com/gene_r_smith" target="_blank">
        <FaTwitter />
      </a>
    </li>
    <li>
      <a href="https://medium.com/@gene_r_smith" target="_blank">
        <FaMedium />
      </a>
    </li>
    <li>
      <a href="http://www.pinterest.com/gene_smith" target="_blank">
        <FaPinterest />
      </a>
    </li>
    <li>
      <a href="https://open.spotify.com/user/genesmith?si=xDf3RF02RFCHuXH5FZB82w" target="_blank">
        <FaSpotify />
      </a>
    </li>
    <li>
      <a href="https://soundcloud.com/gene_smith" target="_blank">
        <FaSoundcloud />
      </a>
    </li>
    </ul>
);

export default SocialLinks;
