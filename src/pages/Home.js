import React from "react";
import NavBar from "../components/NavBar";
import Slide from "../components/Slide";
import { Col, Container, Grid, Row } from "rsuite";
import { useMediaQuery } from "../mics/custom-hook";
import SlideCategory from "../components/SlideCategory";
import NavCate from "../components/NavCate";
import Tag from '../components/Tag'
import Card from '../components/Card'
import BoardCard from "../components/BoardCard";
import RestaurantItem from "../components/RestaurantItem";
import UserItem from "../components/UserItem";
import BottomNavBar from "../components/BottomNavBar";

const Home = () => {
  
    const isDesktop = useMediaQuery('(min-width: 992px');
  return (
<div>
      <Grid fluid className={isDesktop ? `padding` : ``}>
      <Row>
        <Col>
          <Grid>
            {isDesktop && <NavBar />}
            {!isDesktop }
          </Grid>
        </Col>
      </Row>

      <Row gutter={24}>
        <Col md={18} sm={24}>
          <Slide className="s-min-height" style={{minHeight: "900px"}}/>
          <SlideCategory/>
          <NavCate/>
          <Tag text="Do nuong"/>
          <Tag text="Do nuong"/>
         <Container>
         <Row>
            <Col md={6} sm={12}>
              <Card img="https://static.riviu.co/640/image/2021/01/11/e08a33cd0d69108e1733ee71c1c18e49.jpeg" 
              discription="Xem thể lệ và làm theo hướng dẫn để nhận lộc lá từ Riviu nghen. Lấy để còn có tiền dẫn crush du xuân nữa chớ. Tuy thời gian còn dài nhưng đã có hơn 200 bài dự thi rồi nha, nếu bạn chưa tham gia thì hãy nhanh tay viết riviu để rinh lixi Tết nào." 
              title="[GÓC NHẮC NHẸ] HÁI LỘC RIVIU LÊN TỚI 5.OOO.OOO VNĐ TẾT TÂN SỬU 2021"
              author="Tuan pro"
              like="123"  />
            </Col>
            <Col md={6} sm={12}>
              <Card img="https://static.riviu.co/640/image/2021/01/11/e08a33cd0d69108e1733ee71c1c18e49.jpeg" 
              discription="Xem thể lệ và làm theo hướng dẫn để nhận lộc lá từ Riviu nghen. Lấy để còn có tiền dẫn crush du xuân nữa chớ. Tuy thời gian còn dài nhưng đã có hơn 200 bài dự thi rồi nha, nếu bạn chưa tham gia thì hãy nhanh tay viết riviu để rinh lixi Tết nào." 
              title="[GÓC NHẮC NHẸ] HÁI LỘC RIVIU LÊN TỚI 5.OOO.OOO VNĐ TẾT TÂN SỬU 2021"
              author="Tuan pro"
              like="123"  />
            </Col>
            <Col md={6} sm={12}>
              <Card img="https://static.riviu.co/640/image/2021/01/11/e08a33cd0d69108e1733ee71c1c18e49.jpeg" 
              discription="Xem thể lệ và làm theo hướng dẫn để nhận lộc lá từ Riviu nghen. Lấy để còn có tiền dẫn crush du xuân nữa chớ. Tuy thời gian còn dài nhưng đã có hơn 200 bài dự thi rồi nha, nếu bạn chưa tham gia thì hãy nhanh tay viết riviu để rinh lixi Tết nào." 
              title="[GÓC NHẮC NHẸ] HÁI LỘC RIVIU LÊN TỚI 5.OOO.OOO VNĐ TẾT TÂN SỬU 2021"
              author="Tuan pro"
              like="123"  />
            </Col>
            <Col md={6} sm={12}>
              <Card img="https://static.riviu.co/640/image/2021/01/11/e08a33cd0d69108e1733ee71c1c18e49.jpeg" 
              discription="Xem thể lệ và làm theo hướng dẫn để nhận lộc lá từ Riviu nghen. Lấy để còn có tiền dẫn crush du xuân nữa chớ. Tuy thời gian còn dài nhưng đã có hơn 200 bài dự thi rồi nha, nếu bạn chưa tham gia thì hãy nhanh tay viết riviu để rinh lixi Tết nào." 
              title="[GÓC NHẮC NHẸ] HÁI LỘC RIVIU LÊN TỚI 5.OOO.OOO VNĐ TẾT TÂN SỬU 2021"
              author="Tuan pro"
              like="123"  />
            </Col>
            <Col md={6} sm={12}>
              <Card img="https://static.riviu.co/640/image/2021/01/11/e08a33cd0d69108e1733ee71c1c18e49.jpeg" 
              discription="Xem thể lệ và làm theo hướng dẫn để nhận lộc lá từ Riviu nghen. Lấy để còn có tiền dẫn crush du xuân nữa chớ. Tuy thời gian còn dài nhưng đã có hơn 200 bài dự thi rồi nha, nếu bạn chưa tham gia thì hãy nhanh tay viết riviu để rinh lixi Tết nào." 
              title="[GÓC NHẮC NHẸ] HÁI LỘC RIVIU LÊN TỚI 5.OOO.OOO VNĐ TẾT TÂN SỬU 2021"
              author="Tuan pro"
              like="123"  />
            </Col>
            <Col md={6} sm={12}>
              <Card img="https://static.riviu.co/640/image/2021/01/11/e08a33cd0d69108e1733ee71c1c18e49.jpeg" 
              discription="Xem thể lệ và làm theo hướng dẫn để nhận lộc lá từ Riviu nghen. Lấy để còn có tiền dẫn crush du xuân nữa chớ. Tuy thời gian còn dài nhưng đã có hơn 200 bài dự thi rồi nha, nếu bạn chưa tham gia thì hãy nhanh tay viết riviu để rinh lixi Tết nào." 
              title="[GÓC NHẮC NHẸ] HÁI LỘC RIVIU LÊN TỚI 5.OOO.OOO VNĐ TẾT TÂN SỬU 2021"
              author="Tuan pro"
              like="123"  />
            </Col>

            <Col md={6} sm={12}>
              <Card img="https://static.riviu.co/640/image/2021/01/11/e08a33cd0d69108e1733ee71c1c18e49.jpeg" 
              discription="Xem thể lệ và làm theo hướng dẫn để nhận lộc lá từ Riviu nghen. Lấy để còn có tiền dẫn crush du xuân nữa chớ. Tuy thời gian còn dài nhưng đã có hơn 200 bài dự thi rồi nha, nếu bạn chưa tham gia thì hãy nhanh tay viết riviu để rinh lixi Tết nào." 
              title="[GÓC NHẮC NHẸ] HÁI LỘC RIVIU LÊN TỚI 5.OOO.OOO VNĐ TẾT TÂN SỬU 2021"
              author="Tuan pro"
              like="123"  />
            </Col>
            <Col md={6} sm={12}>
              <Card img="https://static.riviu.co/640/image/2021/01/11/e08a33cd0d69108e1733ee71c1c18e49.jpeg" 
              discription="Xem thể lệ và làm theo hướng dẫn để nhận lộc lá từ Riviu nghen. Lấy để còn có tiền dẫn crush du xuân nữa chớ. Tuy thời gian còn dài nhưng đã có hơn 200 bài dự thi rồi nha, nếu bạn chưa tham gia thì hãy nhanh tay viết riviu để rinh lixi Tết nào." 
              title="[GÓC NHẮC NHẸ] HÁI LỘC RIVIU LÊN TỚI 5.OOO.OOO VNĐ TẾT TÂN SỬU 2021"
              author="Tuan pro"
              like="123"  />
            </Col>
          </Row>
         </Container>
        </Col>
        <Col md={6} xsHidden smHidden>
          <BoardCard title="Địa điểm nổi bật">
            <RestaurantItem/>
            <RestaurantItem/>
            <RestaurantItem/>
          </BoardCard>
          <BoardCard title="Nguoi dung noi bat" className="mt-2">
            <UserItem/>
            <UserItem/>
            <UserItem/>
            <UserItem/>
          </BoardCard>
        </Col>
      </Row>
    </Grid>
          {!isDesktop &&< BottomNavBar/>}
</div>

  );
};

export default Home;
