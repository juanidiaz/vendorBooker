import React from "react";
import Background from "../components/Background";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function About() {
  return (
    <div>
      <Background backgroundImage="https://images.search.yahoo.com/images/view;_ylt=AwrExo9C1rFcGkYA8ICJzbkF;_ylu=X3oDMTI0ZThkNmt2BHNlYwNzcgRzbGsDaW1nBG9pZAM2N2IyNzU3NDQwODZjODlmNmVmMDczNDFkOTdkNmQ3ZgRncG9zAzEwMARpdANiaW5n?back=https%3A%2F%2Fimages.search.yahoo.com%2Fsearch%2Fimages%3Fp%3Dcats%2Band%2Bdogs%2Bgrooming%26fr%3Dmcafee%26nost%3D1%26imgurl%3Dhttps%253A%252F%252Fsites.create-cdn.net%252Fsiteimages%252F35%252F5%252F2%252F355249%252F9718225.jpg%253F1425544365%26tab%3Dorganic%26ri%3D100&w=3258&h=1509&imgurl=www.safepet.com.au%2Fwp-content%2Fuploads%2F2015%2F06%2FDogs-and-Cats-in-a-Row-Large.jpg&rurl=http%3A%2F%2Fwww.safepet.com.au%2Fdog-grooming%2F&size=3385.7KB&name=Dog+grooming+%7C+Safe+Pet&p=cats+and+dogs+grooming&oid=67b275744086c89f6ef07341d97d6d7f&fr2=&fr=mcafee&tt=Dog+grooming+%7C+Safe+Pet&b=61&ni=192&no=100&ts=&tab=organic&sigr=1171btirv&sigb=16iob2h9k&sigi=12ecq6ock&sigt=10nmrhccv&sign=10nmrhccv&.crumb=aJ5ARDWm2wV&fr=mcafee">
        <h1>Pupster</h1>
        <h2>They're the Good Boys and Girls</h2>
      </Background>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>Welcome To Pupster!</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquet diam tortor, id
              consequat mauris ullamcorper eu. Orci varius natoque penatibus et magnis dis
              parturient montes, nascetur ridiculus mus. Pellentesque et dui id justo finibus
              sollicitudin at et metus. Ut feugiat tellus nec metus commodo, sed suscipit nisi
              gravida. Duis eget vestibulum quam, ut porttitor sem. Donec sagittis mi sollicitudin
              turpis semper, et interdum risus lobortis. Vestibulum suscipit nunc non egestas
              tristique. Proin hendrerit efficitur malesuada. Mauris lorem urna, sodales accumsan
              quam non, tristique tempor erat. Nullam non sem facilisis, tempus tortor sit amet,
              volutpat nisl. Ut et turpis non nunc maximus mollis a vitae tortor. Pellentesque
              mattis risus ac quam laoreet cursus. Praesent suscipit orci neque, vestibulum
              tincidunt augue tincidunt non. Duis consequat mattis tortor vitae mattis.
            </p>
            <p>
              Phasellus at rutrum nisl. Praesent sed massa ut ipsum bibendum porttitor. Sed
              malesuada molestie velit ac viverra. Quisque a ullamcorper purus. Curabitur luctus mi
              ac mi hendrerit semper. Nulla tincidunt accumsan lobortis. Mauris convallis sapien non
              nibh porta accumsan. Nunc volutpat tempus porttitor. Nunc congue dictum egestas.
              Aliquam blandit mi eu urna scelerisque, vitae volutpat ligula ultricies. Maecenas vel
              porta augue. Fusce mauris ex, dignissim et lacinia ut, tempus eget nibh.
            </p>
            <p>
              Etiam ut massa efficitur, gravida sapien non, condimentum sapien. Suspendisse massa
              tortor, facilisis in neque sit amet, scelerisque elementum tortor. Nullam eget nibh
              sit amet odio lobortis ullamcorper. Nulla bibendum magna nec sem pulvinar lobortis.
              Mauris et imperdiet urna, vitae lobortis dui. Nunc elementum elit mi, non mattis enim
              congue at. Proin mi lectus, ullamcorper id hendrerit eu, ultricies vitae lacus. Nunc
              vehicula, erat eget laoreet condimentum, felis ante malesuada leo, nec efficitur diam
              nisi eget nisi. Cras arcu lacus, tristique in bibendum vitae, elementum eget lorem.
              Maecenas vestibulum volutpat orci eu pharetra. Praesent vel blandit ante, nec faucibus
              libero. Sed ultrices lorem ex, eu facilisis libero convallis ac. Vivamus id dapibus
              eros. Nullam tempor sem rhoncus porta semper. Proin bibendum vulputate nisl, fringilla
              interdum elit pulvinar eu. Quisque vitae quam dapibus, vestibulum mauris quis, laoreet
              massa.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;