import { Building2Icon, GithubIcon, SquareArrowOutUpRight, Users } from 'lucide-react';
import { HeaderContent, HomeHeaderContainer } from "./styles";

export function HomeHeader() {

  return (
    <HomeHeaderContainer>
      <img src="https://github.com/diegogmferreira.png" alt="" />

      <HeaderContent>
        <div>
          <div className="title">
            <h2>Camera Williamson</h2>

            <a href='/'>
              GITHUB
              <SquareArrowOutUpRight size={12} />
            </a>
          </div>

          <p>
            Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.
            Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.
          </p>

        </div>

        <div className="bottom_links">
          <a href="">
            <GithubIcon size={18} />
            diegogmferreira
          </a>

          <a href="">
            <Building2Icon size={18} />
            Galdev
          </a>

          <a href="">
            <Users size={18} />
            32 followers
          </a>
        </div>

      </HeaderContent>
    </HomeHeaderContainer>
  )
}