import fb_platform from "../../Assets/fb_platform.png";
import yt_platform from "../../Assets/yt_platform.png";
import google_platform from "../../Assets/google_platform.png";

const addPlatform = (url) => {
  return <img src={url} width={22} height={22} className="ml-[35%]" />;
};

export const CampaignsList = [
  {
    CampaignName: "Bluberry cake Campaign",
    DateRange: "25 jul 2020 - 01 Aug 2020",
    Clicks: "300",
    Budget: "INR.3,400",
    Location: "Chennai",
    Platform: addPlatform(fb_platform),
    Status: "Live Now",
    Id: "1",
  },
  {
    CampaignName: "Chocolate cake campaign",
    DateRange: "25 jul 2020 - 01 Aug 2020",
    Clicks: "210",
    Budget: "INR.3,400",
    Location: "Coimbatore",
    Platform: addPlatform(fb_platform),
    Status: "Paused",
    Id: "2",
  },
  {
    CampaignName: "Bluberry cake Campaign",
    DateRange: "25 jul 2020 - 01 Aug 2020",
    Clicks: "300",
    Budget: "INR.3,400",
    Location: "Chennai",
    Platform: addPlatform(fb_platform),
    Status: "Live Now",
    Id: "3",
  },
  {
    CampaignName: "Browine cake campaign",
    DateRange: "25 jul 2020 - 01 Aug 2020",
    Clicks: "123",
    Budget: "INR.3,400",
    Location: "Erode",
    Platform: addPlatform(fb_platform),
    Status: "Exhausted",
    Id: "4",
  },
  {
    CampaignName: "Pumpkin cake camapign",
    DateRange: "25 jul 2020 - 01 Aug 2020",
    Clicks: "435",
    Budget: "INR.3,400",
    Location: "Chennai",
    Platform: addPlatform(yt_platform),
    Status: "Live Now",
    Id: "6",
  },
  {
    CampaignName: "Cup cakes campaign",
    DateRange: "25 jul 2020 - 01 Aug 2020",
    Clicks: "123",
    Budget: "INR.3,400",
    Location: "Chennai",
    Platform: addPlatform(google_platform),
    Status: "Live Now",
    Id: "7",
  },
];
