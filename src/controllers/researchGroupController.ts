import { Request, Response } from "express";
import ResearchGroup from "../models/ResearchGroup";

class researchGroupController {
  public async getResearcGroups(req: Request, res: Response) {
    //Returns the list of all the groups
    try {
      let groups = await ResearchGroup.find();
      res.status(200).json(groups);
    } catch (error) {
      console.log(`\n` + error);
      res.status(500).json(`${error}`);
    }
  }

  public async getResearchGroup(req: Request, res: Response) {
    //Returns the details of a group
    try {
      let group = await ResearchGroup.findById(req.params.groupid);
      if (!group) {
        console.log(`\nResearch Group with id ${req.params.groupid} not found`);
        res
          .status(404)
          .json(`Research group with id ${req.params.groupid} not found`);
      } else res.status(200).json(group);
    } catch (error) {
      console.log(`\n` + error);
      res.status(500).json(`${error}`);
    }
  }

  public async addResearchGroup(req: Request, res: Response) {
    try {
      let { name, description, link, responsible } = req.body;
      let newGroup = new ResearchGroup({
        name,
        description,
        link,
        responsible,
      });
      await newGroup.save();
      console.log(`\nAdded Group:\n ${newGroup}`);
      res.status(201).json(newGroup);
    } catch (error) {
      console.log(`\n` + error);
      res.status(500).json(`${error}`);
    }
  }

  public async editResearchGroup(req: Request, res: Response) {
    try {
      let checkGroup = await ResearchGroup.findById(req.params.groupid);
      if (checkGroup) {
        await ResearchGroup.findOneAndUpdate(
          { _id: req.params.groupid },
          {
            $set: {
              name: req.body.name,
              description: req.body.description,
              link: req.body.link,
              responsible: req.body.responsible,
            },
          },
          { new: true }
        ).then((editedGroup) => {
          console.log(
            `Research Group with id ${req.params.groupid} modified: ${editedGroup}`
          );
          res.status(201).json(editedGroup);
        });
      } else {
        console.log(`Research Group with id ${req.params.groupid} not found`);
        res
          .status(404)
          .json(`Research Group with id ${req.params.groupid} not found`);
      }
    } catch (error) {
      console.log(`\n` + error);
      res.status(500).json(`${error}`);
    }
  }
}

const controller: researchGroupController = new researchGroupController();
export default controller;
