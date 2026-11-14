import logo from '../assets/logo.jpg'

export default function Logo() {
  return (
    <a className="logo" href="#top">
      <img src={logo} alt="Faralokun Vital Herbs logo" width="42" height="42" />
      <span>Faralokun<small>Vital Herbs</small></span>
    </a>
  )
}
