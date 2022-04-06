import guest from './img/guest.png';
import './App.css';
import Carousel from 'react-elastic-carousel';
import Item from './item';
import ham from './img/ham.png';
import mic from './img/mic.png';

export default function App() {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

  return (
    <>
      <div className="w-full h-1/5  -red-500 flex  new1 ">
        <div>
          <img
            className=" ml-10 w-3/12 ml-48 -mt-5   -red-500"
            src="https://logos-world.net/wp-content/uploads/2021/02/Microsoft-Bing-Logo-2020-present-700x394.png"
            alt=""
          />
        </div>

        <div className="flex space-x-4  -red-500 -ml-48 text-white">
          <div className="ml-1/12 mt-5 ">Images</div>
          <div className="ml-1/12 mt-5">Videos</div>
          <div className="ml-1/12 mt-5">Translate</div>
        </div>
        <div className="flex space-x-4 mt-5  text-white   w-1/2 ml-48 ">
          <div>
            <div className="m-1 ml-10  w-full">Sign in</div>
          </div>
          <div>
            <img src={guest} alt="" className="w-2/3  ml-2 mt-1" />
          </div>
          <div>

            <div className ="dropdown1">
              <div className="dropdown">
              <img src={ham} alt="" className="w-1/12 -mt-2 " />
              </div>
              <div className="dp_content">
                <div className="m-10 text-gray-600 text-lg "> 

                  <div classname="  -pb-5">Setting</div>
                  <div classname="p-5">Safe Search</div>
                  <div classname="mb-2">Search History</div>
                  <div>My Bing</div>
                  <div>Privacy</div>
                  <div>Feedback</div>
                  <div>Customise your homepage</div>
                  <div>Show Menubar</div>
                  <div>Show news and interests</div>
                  <div className="">Show homepage image</div>

                </div>
              </div>
            </div>
          
          </div>
        </div>
      </div>
      <div className="ml-96 mt-48">
        <input
          type="text"
          className="w-1/2 h-12 p-5 rounded-3xl ml-10 items-center "
        />
        {/* <img src={mic} alt="" className="border"/> */}
      </div>
      <div className="mt-36 m-10 ">
        <div className="styling-example">
          <Carousel itemsToShow={4}>
            <Item>
              <div className=" -100 bg-black">
                <p className="text-sm bg-black m-1">The Statesman</p>
                <div className="flex m-1">
                  <div>
                    <img
                      className=""
                      src="https://static.toiimg.com/thumb/msid-90672116,imgsize-51154,width-400,resizemode-4/90672116.jpg"
                      alt=""
                    />
                  </div>

                  <div className="text-sm bg-black ml-2">
                    Muslim League-Nawaz (PML-N) president Shehbaz
                  </div>
                </div>
              </div>
            </Item>
            <Item>
              {' '}
              <div className=" -100 bg-black">
                <p className="text-sm bg-black m-1">Zee News</p>
                <div className="flex m-1">
                  <div>
                    <img
                      className=""
                      src="https://static.toiimg.com/thumb/msid-90567804,imgsize-76046,width-400,resizemode-4/90567804.jpg"
                      alt=""
                    />
                  </div>

                  <div className="text-sm bg-black ml-2">
                    UK sanctions Russian media over disinformation
                  </div>
                </div>
              </div>
            </Item>
            <Item>
              {' '}
              <div className=" -100 bg-black">
                <p className="text-sm bg-black m-1">News 18</p>
                <div className="flex m-1">
                  <div>
                    <img
                      className=""
                      src="https://static.toiimg.com/thumb/msid-90667291,imgsize-758351,width-400,resizemode-4/90667291.jpgg"
                      alt=""
                    />
                  </div>

                  <div className="text-sm bg-black ml-2">
                    Pakistan's embattled Prime Minister Imran
                  </div>
                </div>
              </div>
            </Item>
            <Item>
              {' '}
              <div className=" -100 bg-black">
                <p className="text-sm bg-black m-1">India Today</p>
                <div className="flex m-1">
                  <div>
                    <img
                      className=""
                      src="https://static.toiimg.com/thumb/imgsize-221948,msid-90650103,width-400,resizemode-4/90650103.jpg"
                      alt=""
                    />
                  </div>

                  <div className="text-sm bg-black ml-2">
                    Kremlin spokesman Dmitry Peskov says
                  </div>
                </div>
              </div>
            </Item>
            <Item>
              {' '}
              <div className=" -100 bg-black">
                <p className="text-sm bg-black m-1">The Statesman</p>
                <div className="flex m-1">
                  <div>
                    <img
                      className=""
                      src="https://static.toiimg.com/thumb/msid-90672116,imgsize-51154,width-400,resizemode-4/90672116.jpg"
                      alt=""
                    />
                  </div>

                  <div className="text-sm bg-black ml-2">
                    Muslim League-Nawaz (PML-N) president Shehbaz
                  </div>
                </div>
              </div>
            </Item>
            <Item>
              {' '}
              <div className=" -100 bg-black">
                <p className="text-sm bg-black m-1">The Statesman</p>
                <div className="flex m-1">
                  <div>
                    <img
                      className=""
                      src="https://static.toiimg.com/thumb/msid-90672116,imgsize-51154,width-400,resizemode-4/90672116.jpg"
                      alt=""
                    />
                  </div>

                  <div className="text-sm bg-black ml-2">
                    Muslim League-Nawaz (PML-N) president Shehbaz
                  </div>
                </div>
              </div>
            </Item>
            <Item>
              {' '}
              <div className=" -100 bg-black">
                <p className="text-sm bg-black m-1">The Statesman</p>
                <div className="flex m-1">
                  <div>
                    <img
                      className=""
                      src="https://static.toiimg.com/thumb/msid-90672116,imgsize-51154,width-400,resizemode-4/90672116.jpg"
                      alt=""
                    />
                  </div>

                  <div className="text-sm bg-black ml-2">
                    Muslim League-Nawaz (PML-N) president Shehbaz
                  </div>
                </div>
              </div>
            </Item>
            <Item>
              {' '}
              <div className=" -100 bg-black">
                <p className="text-sm bg-black m-1">The Statesman</p>
                <div className="flex m-1">
                  <div>
                    <img
                      className=""
                      src="https://static.toiimg.com/thumb/msid-90672116,imgsize-51154,width-400,resizemode-4/90672116.jpg"
                      alt=""
                    />
                  </div>

                  <div className="text-sm bg-black ml-2">
                    Muslim League-Nawaz (PML-N) president Shehbaz
                  </div>
                </div>
              </div>
            </Item>
            <Item>
              {' '}
              <div className=" -100 bg-black">
                <p className="text-sm bg-black m-1">The Statesman</p>
                <div className="flex m-1">
                  <div>
                    <img
                      className=""
                      src="https://static.toiimg.com/thumb/msid-90672116,imgsize-51154,width-400,resizemode-4/90672116.jpg"
                      alt=""
                    />
                  </div>

                  <div className="text-sm bg-black ml-2">
                    Muslim League-Nawaz (PML-N) president Shehbaz
                  </div>
                </div>
              </div>
            </Item>
            <Item>
              {' '}
              <div className=" -100 bg-black">
                <p className="text-sm bg-black m-1">The Statesman</p>
                <div className="flex m-1">
                  <div>
                    <img
                      className=""
                      src="https://static.toiimg.com/thumb/msid-90672116,imgsize-51154,width-400,resizemode-4/90672116.jpg"
                      alt=""
                    />
                  </div>

                  <div className="text-sm bg-black ml-2">
                    Muslim League-Nawaz (PML-N) president Shehbaz
                  </div>
                </div>
              </div>
            </Item>
            <Item>
              {' '}
              <div className=" -100 bg-black">
                <p className="text-sm bg-black m-1">The Statesman</p>
                <div className="flex m-1">
                  <div>
                    <img
                      className=""
                      src="https://static.toiimg.com/thumb/msid-90672116,imgsize-51154,width-400,resizemode-4/90672116.jpg"
                      alt=""
                    />
                  </div>

                  <div className="text-sm bg-black ml-2">
                    Muslim League-Nawaz (PML-N) president Shehbaz
                  </div>
                </div>
              </div>
            </Item>
            <Item>
              {' '}
              <div className=" -100 bg-black">
                <p className="text-sm bg-black m-1">The Statesman</p>
                <div className="flex m-1">
                  <div>
                    <img
                      className=""
                      src="https://static.toiimg.com/thumb/msid-90672116,imgsize-51154,width-400,resizemode-4/90672116.jpg"
                      alt=""
                    />
                  </div>

                  <div className="text-sm bg-black ml-2">
                    Muslim League-Nawaz (PML-N) president Shehbaz
                  </div>
                </div>
              </div>
            </Item>
          </Carousel>
        </div>
      </div>
    </>
  );
}
