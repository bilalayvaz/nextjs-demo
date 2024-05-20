import classes from "./MeetupDetail.module.css";

function MeetupDetail(props) {
  return (
    <section className={classes.detail}>
      <img src={props.image} alt={props.title} />
      <h1>{props.title}</h1>
      <address>{props.address}</address>
      <p>Moniker: bilalayvazoglu</p>
      <p>Testnet Initia Validator: <a href="https://scan.testnet.initia.xyz/initiation-1/validators/initvaloper17mk2y3qdhvcw00qjz0u9xs2qhf3e5pdd06c67v">bilalayvazoglu</a></p>
      <p>Github: <a href="https://github.com/bilalayvaz">https://github.com/bilalayvaz</a></p>
      <p>Twitter: <a href="https://x.com/bilalayvazoglu">https://x.com/bilalayvazoglu</a></p>
    </section>
  );
}

export default MeetupDetail;
